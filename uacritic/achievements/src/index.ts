require('dotenv').config();

import mongoose from "mongoose";
import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import slowDown from 'express-slow-down';

import router from "./routes";
import {ErrorMiddleware} from '@uacritic/uacritic_common';

import {natsWrapper} from "./natsWrapper";
import {UserCreatedListener} from "./events/listeners/user-created-listener";
import {UserUpdatedListener} from "./events/listeners/user-updated-listener";
import {CommentCreatedListener} from "./events/listeners/comment-created-listener";

require('dotenv').config();

const PORT = process.env.PORT || 8000;
const app = express();

const speedLimiter = slowDown({
    windowMs: 15 * 60 * 1000,
    delayAfter: 20,
    delayMs: () => 500
});

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use(cookieParser());
app.use(speedLimiter);

app.use('/api', router);

app.use(ErrorMiddleware);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL!);

        await natsWrapper.connect('uacritic', 'achievements', 'http://nats-srv:4222');
        natsWrapper.client.on('close', () => {
            console.log('NATS connection closed');
            process.exit();
        })

        new UserCreatedListener(natsWrapper.client).listen();
        new UserUpdatedListener(natsWrapper.client).listen();
        new CommentCreatedListener(natsWrapper.client).listen();

        process.on('SIGINT', () => natsWrapper.client.close());
        process.on('SIGTERM', () => natsWrapper.client.close());

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start()
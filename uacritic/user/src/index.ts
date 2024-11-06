import {natsWrapper} from "./natsWrapper";

import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import slowDown from 'express-slow-down';

import swaggerSetup from './swaggerDocs';

import router from "./routes";
import db from './db/db';
import {ErrorMiddleware} from '@uacritic/uacritic_common';

require('dotenv').config();

const PORT = 7000;
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
swaggerSetup(app);

app.use(ErrorMiddleware);

const start = async () => {
    try {
        await natsWrapper.connect('uacritic', 'user', 'http://nats-srv:4222');
        natsWrapper.client.on('close', () => {
            console.log('NATS connection closed');
            process.exit();
        })
        process.on('SIGINT', () => natsWrapper.client.close());
        process.on('SIGTERM', () => natsWrapper.client.close());

        await db.authenticate();
        await db.sync();

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();

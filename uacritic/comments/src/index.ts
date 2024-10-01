require('dotenv').config();

import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import slowDown from 'express-slow-down';

import {ErrorMiddleware} from '@uacritic/uacritic_common';
import router from "./routes";

const PORT = process.env.PORT || 7000;
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

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();

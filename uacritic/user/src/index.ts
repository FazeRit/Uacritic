require('dotenv').config();

import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";

import router from "./routes";
import db from './db/db'
import {ErrorMiddleware} from '@uacritic/uacritic_common';

const PORT = process.env.PORT || 7000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api', router);
app.use(ErrorMiddleware);

const start = async () => {
    try {
        await db.authenticate();
        await db.sync();
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start()
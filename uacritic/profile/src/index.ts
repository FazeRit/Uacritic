import mongoose from "mongoose";
import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";

import router from "./routes";
import {ErrorMiddleware} from '@uacritic/uacritic_common';

require('dotenv').config();

require('dotenv').config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api', router);
app.use(ErrorMiddleware);

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start()
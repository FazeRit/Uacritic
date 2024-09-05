import authRoute from './userRoute';
import express from "express";

const router = express.Router();

router.use('/user', authRoute);

export default router;
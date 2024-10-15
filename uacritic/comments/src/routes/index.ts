import CommentsRoute from './CommentsRoute';
import express from "express";

const router = express.Router();

router.use('/comments', CommentsRoute);

export default router;
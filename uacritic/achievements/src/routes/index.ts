import express from "express";
import achievementRoute from "./achievementRoute";

const router = express.Router();

router.use('/achievements/', achievementRoute)

export default router;
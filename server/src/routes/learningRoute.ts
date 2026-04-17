import { Router } from "express";
import { getAllLearning, getLearning, createLearning, updateLearning, deleteLearning } from "../controllers/learningController";

const router = Router();

router.get("/", getAllLearning);
router.get("/:id", getLearning);
router.post("/", createLearning);
router.put("/:id", updateLearning);
router.delete("/:id", deleteLearning);

export default router;

import { Router } from "express";
import {
  getAllExperiences,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} from "../controllers/experienceController";

const router = Router();

router.get("/", getAllExperiences);
router.get("/:id", getExperience);
router.post("/", createExperience);
router.put("/:id", updateExperience);
router.delete("/:id", deleteExperience);

export default router;

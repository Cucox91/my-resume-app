import { Router } from "express";
import {
  getAllEducation,
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
} from "../controllers/educationController";

const router = Router();

router.get("/", getAllEducation);
router.get("/:id", getEducation);
router.post("/", createEducation);
router.put("/:id", updateEducation);
router.delete("/:id", deleteEducation);

export default router;

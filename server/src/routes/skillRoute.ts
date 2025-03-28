import { Router } from "express";
import {
  getAllSkills,
  getSkill,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../controllers/skillController";

const router = Router();

router.get("/", getAllSkills);
router.get("/:id", getSkill);
router.post("/", createSkill);
router.put("/:id", updateSkill);
router.delete("/:id", deleteSkill);

export default router;

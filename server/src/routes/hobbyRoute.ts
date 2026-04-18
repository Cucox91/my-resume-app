import { Router } from "express";
import { getAllHobbies, getHobby, createHobby, updateHobby, deleteHobby } from "../controllers/hobbyController";

const router = Router();

router.get("/", getAllHobbies);
router.get("/:id", getHobby);
router.post("/", createHobby);
router.put("/:id", updateHobby);
router.delete("/:id", deleteHobby);

export default router;

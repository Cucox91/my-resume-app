import { Router } from "express";
import { getUserDetails, login, register, setUserDetails } from "../controllers/authController";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.get("/user/:username", getUserDetails);
router.post("/user/:username", setUserDetails);

export default router;

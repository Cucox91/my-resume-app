import { Router } from "express";
import { getUserDetails, login, register, setUserDetails, uploadAvatar, upload, getUserAvatar } from "../controllers/authController";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.get("/user/:username", getUserDetails);
router.post("/user/:username", setUserDetails);
router.post("/upload-avatar", upload.single("avatar"), uploadAvatar);
router.get("/user/:username/avatar", getUserAvatar);

export default router;

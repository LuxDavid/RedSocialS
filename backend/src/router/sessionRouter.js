import { Router } from "express";
import { login } from "../controllers/session.controller.js";
import passport from "passport";

const router=Router();

//-------------------------------------------------
router.post("/login", login)

export default router;
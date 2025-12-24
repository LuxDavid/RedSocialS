import { Router } from "express";
import { login, current } from "../controllers/session.controller.js";
import passport from "passport";

const router=Router();

//-------------------------------------------------
router.post("/login", passport.authenticate('login', {session:false}) ,login);

router.get("/current", passport.authenticate('current', {session:false}), current);

export default router;
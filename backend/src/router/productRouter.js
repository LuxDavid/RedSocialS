import {Router} from "express";

const router= Router();

router.get("/", (req,res)=> res.send("Router de Products"));

export default router;
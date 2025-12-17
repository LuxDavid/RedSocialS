import {Router} from "express";

const router= Router();

router.get("/", (req,res)=> res.send("Router de Carts"));

export default router;
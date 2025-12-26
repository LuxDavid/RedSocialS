import {Router} from "express";
import { generateProductTest } from "../controllers/product.controller.js";

const router= Router();

router.get("/", (req,res)=> res.send("Router de Products"));

router.post("/test", generateProductTest);

export default router;
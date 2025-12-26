import {Router} from "express";
import { generateProductTest, getProducts } from "../controllers/product.controller.js";

const router= Router();

router.get("/", (req,res)=> res.send("Router de Products"));

router.get("/testProducts", getProducts);

router.post("/test", generateProductTest);

export default router;
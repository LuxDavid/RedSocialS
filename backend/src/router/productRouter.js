import {Router} from "express";
import { generateProductTest, getProducts, getProduct } from "../controllers/product.controller.js";

const router= Router();

router.get("/product/:pid", getProduct);

router.get("/testProducts", getProducts);

router.post("/test", generateProductTest);

export default router;
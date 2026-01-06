import {Router} from "express";
import { generateProductTest, getProducts, getProduct, deleteProduct } from "../controllers/product.controller.js";

const router= Router();

router.get("/product/:pid", getProduct);

router.get("/testProducts", getProducts);

router.post("/test", generateProductTest);

router.delete("/product/:pid", deleteProduct);

export default router;
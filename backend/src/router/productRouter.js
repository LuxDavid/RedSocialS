import {Router} from "express";
import { generateProductTest, getProducts, getProduct, deleteProduct, updateProduct, createProduct } from "../controllers/product.controller.js";

const router= Router();

router.get("/product/:pid", getProduct);

router.get("/testProducts", getProducts);

router.post("/test", generateProductTest);

router.delete("/product/:pid", deleteProduct);

router.put("/modify/:pid", updateProduct);

router.post("/newProduct", createProduct);

export default router
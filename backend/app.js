import express from "express";
import cookieParser from "cookie-parser";
import passport from "passport";

//Importacion de routers
import cartRouter from "./src/router/cartRouter.js";
import messageRouter from "./src/router/messageRouter.js";
import userRouter from "./src/router/userRouter.js";
import productRouter from "./src/router/productRouter.js";

//Importacion de variables de ambiente
import config from "./src/config/config.js";
const {PORT} =config;

const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use("/api/carts", cartRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.listen(PORT, () => console.log(`Servidor activo en el puero ${PORT}`));
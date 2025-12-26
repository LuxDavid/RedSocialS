import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";
import initializePassport from "./src/config/passportConfig.js";
import cors from "cors";
import compression from 'express-compression';

//Importacion de routers
import cartRouter from "./src/router/cartRouter.js";
import messageRouter from "./src/router/messageRouter.js";
import userRouter from "./src/router/userRouter.js";
import productRouter from "./src/router/productRouter.js";
import sessionRouter from "./src/router/sessionRouter.js";

//Importacion de variables de ambiente
import config from "./src/config/config.js";
const {PORT, KEY} =config;

const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
  credentials: true
}));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use(compression({
    brotli:{enabled:true, zlib:{}}
}));

app.use("/api/carts", cartRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/session", sessionRouter);

app.listen(PORT, () => console.log(`Servidor activo en el puero ${PORT}`));
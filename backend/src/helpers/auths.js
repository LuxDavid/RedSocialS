import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../config/config.js"

const {KEY} = config;

export const createHash= (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

export const isValidPassword= (user,password) => {
    return bcrypt.compareSync(password, user?.password);
}

export const generateToken=(user) => {
    return jwt.sign({user}, KEY,{expiresIn:'12h'});
}

export const cookieExtractor= (req) => {
    let token= (req?.cookies) ? req.cookies['cookieUS'] : null;

    if(!token){
        token=req?.headers?.token
    }

    return token;
}
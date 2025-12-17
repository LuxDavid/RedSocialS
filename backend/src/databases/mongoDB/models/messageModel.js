import mongoose from "mongoose";
import config from "../../../config/config.js"

const {COLLECTIONM} = config;

const collectionName=COLLECTIONM;

const messageSchema= new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
    }
});

export const messageModel= mongoose.model(collectionName, messageSchema);
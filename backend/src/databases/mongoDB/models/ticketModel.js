import mongoose from "mongoose";
import config from "../../../config/config.js"

const {COLLECTIONT} = config;

const collectionName=COLLECTIONT;

const ticketSchema= new mongoose.Schema({
    code:{
        type:String,
        required:true,
        unique:true
    },
    amount:{
        type:Number,
        required:true,
    },
    emailUser:{
        type:String,
        required:true,
    },
    user:{
        type:String,
        required:true,
    },
    created_at:{
        type:Date,
    },
    updated_at:{
        type:Date,
    }
});

export const ticketModel= new mongoose.model(collectionName, ticketSchema);
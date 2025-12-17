import mongoose from "mongoose";
import config from "../../../config/config.js"

const {COLLECTIONC, COLLECTIONP} = config;

const collectionName=COLLECTIONC;

const cartSchema= new mongoose.Schema({
    products:{
        type:[{
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:COLLECTIONP
            },
            quantity:{
                type:Number
            }
        }]
    },
    userId:{
        type:String,
        unique:true
    },
    created_at:{
        type:Date,
    },
    updated_at:{
        type:Date,
    }
});

export const cartModel= mongoose.model(collectionName, cartSchema);
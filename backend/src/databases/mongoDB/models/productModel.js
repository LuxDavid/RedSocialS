import mongoose from "mongoose";
import config from "../../../config/config.js"
import mongoosePaginate from "mongoose-paginate-v2";

const {COLLECTIONP} = config;

const collectionName=COLLECTIONP;

const productSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    thumbnails:{
        type:Array,
        default:[]
    },
    owner:{
        type:String,
        required:true,
        default:"Admin"
    },
    created_at:{
        type:Date,
    },
    updated_at:{
        type:Date,
    }
});

productSchema.plugin(mongoosePaginate);
export const productModel= mongoose.model(collectionName, productSchema);
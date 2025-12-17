import mongoose from "mongoose";
import config from "../../../config/config.js";
import mongoosePaginate from "mongoose-paginate-v2";
import { DateTime } from "luxon";

const {COLLECTIONU, COLLECTIONC} = config;

const collectionName=COLLECTIONU;

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cartUser:{
        type:[{
            cart:{
                type:mongoose.Schema.Types.ObjectId,
                ref:COLLECTIONC
            }
        }],
        default:[]
    },
    role:{
        type:String,
        default:'user',
        enum:['user', 'admin']
    },
    lastConnection:{
        type:String,
        default:DateTime.now().toLocaleString()
    },
    created_at:{
        type:String,
        default:DateTime.now().toLocaleString()
    },
    updated_at:{
        type:String,
        default:DateTime.now().toLocaleString()
    }
});

userSchema.pre('findOne', function(){
    this.populate('cartUser.cart')
});

userSchema.plugin(mongoosePaginate);

export const userModel= mongoose.model(collectionName,userSchema);



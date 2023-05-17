import mongoose from "mongoose";
import { user } from "../interfaces/Allinterface";

interface Iuser extends user,mongoose.Document{}

const userSchema = new mongoose.Schema<user>({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    phoneNum:{
        type:Number
    },
    isAdmin:{
        type:Boolean
    },
    verified:{
        type:Boolean
    },
    books:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"BookCollections"
        }
    ]     
},
{timestamps:true})

const userModel = mongoose.model<Iuser>("userCollections",userSchema)

export default userModel;
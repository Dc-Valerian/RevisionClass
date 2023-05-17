import userModel from "../model/userModel";
import express,{Request,Response} from "express"


// GET ALL USERS
export const getAllUsers= async (req:Request,res:Response)=>{
    try {
        const users = await userModel.find()

        return res.status(200).json({
            message:"Users gotten",
            data:users
        })

    } catch (error) {
     return res.status(400).json({
        message:"failed to get all users",
        data:error
     })
    }
}

// TO SEARCH 
export const searchUser = async(req:Request,res:Response)=>{
    try {
        const search = await userModel.find(req.query).sort({name :1 })

        return res.status(200).json({
            message:"search gotten",
            data:search
        })
    } catch (error) {
        return res.status(400).json({
            message:"failed to search for users",
            data:error
         })
    }
}
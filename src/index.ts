import express, { Application,Request,Response } from "express"
import { dbConfig } from "../Config/db";
import { appConfig } from "./app";

const PORT = 2022;

const app:Application = express()

appConfig(app)
// dbConfig();
 
app.get("/",(req:Request,res:Response)=>{
  return res.status(200).json({
    message:"api is ready for consumption"
  })
})

app.listen(PORT,()=>{
    console.log(`Valerian Server is up and running on ${PORT}`);
    
})
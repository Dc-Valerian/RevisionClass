import express, { Application,Response,Request } from "express"
import cors from "cors"
import morgan from "morgan"

export const appConfig = (app:Application) =>{
    app.use(express.json()).use(morgan("dev")).use(cors())
}
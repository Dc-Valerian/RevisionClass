import mongoose from "mongoose";

const DB_URL ="mongodb://127.0.0.1:27017/text"

export const dbConfig =async ()=>{
    try {
        const connectionStream = await mongoose.connect(DB_URL)

        console.log(`connected to port ${connectionStream.connection.host}`);
        
    } catch (error) {
        console.log(error);
        
    }
}
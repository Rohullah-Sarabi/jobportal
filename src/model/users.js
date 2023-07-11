import { Schema } from "mongoose";
import mongoose from "mongoose";
const user = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    privilage:{
        type:String,
        required:true
    }
})

export default mongoose.models.user || mongoose.model("user",user);
import mongoose from "mongoose";
import { Schema } from "mongoose";

// subSchema for contacts
const contect = new Schema({
    contectBy:{
        type:String,
    },
    link:{
        type:String
    }
})
// main Schema
const applicant = new Schema({
    user_id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    contect:[contect],
    skill:collectionRef,
    experience:ExperienceCollectionRef,
    Education:EducationCollectionRef
})

export default mongoose.models.applicant || mongoose.model("applicant",applicant);
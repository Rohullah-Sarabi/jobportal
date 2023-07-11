import mongoose from "mongoose";
import { Schema } from "mongoose";

const skills = new Schema({
    skills:[{skills:String}],
    functional_area:String,
    user_id:applicants_id
})

export default mongoose.models.skills || mongoose.model("skills",skills);
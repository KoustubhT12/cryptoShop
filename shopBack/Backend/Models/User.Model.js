import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // Field is required
        unique: true,   // Value must be unique
    },
    password: {
        type: String,
        required: true, 
    },
    secretcode:{
        type:String
    }

},{
    timestamps:true
});

const USER = mongoose.model("User",userSchema);

export default USER;
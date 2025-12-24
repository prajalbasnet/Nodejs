import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email : "string",
  password : "string"
})

const userModel = mongoose.model("user", userSchema);

export default userModel;
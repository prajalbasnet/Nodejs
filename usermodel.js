import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/hello')

const userSchema = mongoose.Schema({
    username: String,
    password: String
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
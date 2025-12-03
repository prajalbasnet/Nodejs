import mongoose from "mongoose";

const uri = "mongodb+srv://hello:hello@mongodb.pnklm67.mongodb.net/?appName=MongoDB";
mongoose.connect(uri)
.then(() => {
    console.log("Connected to MongoDB successfully");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
})
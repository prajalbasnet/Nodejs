import express from "express";
import mongoose from "mongoose";
import userModel from './usermodel.js';
import {fileURLToPath} from 'url';
import path from 'path';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import verifyToken from './auth.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//connection to mongodb
dotenv.config();
mongoose.connect(process.env.MONGODB_URL);


//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cookieParser());

//routes  
app.post('/signup', async(req,res)=> {
const {email, password} = req.body;

if(password.length < 6){
  return res.send("Password must be at least 6 characters long.");
}

const existingUser = await userModel.findOne({email});
if(existingUser){
  return res.send("User with this email already exists.");
}

const hashedPassword = await bcrypt.hash(password, 10);

await userModel.create({
  email,
  password: hashedPassword
});
res.redirect('/login.html');
})


//login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.send("No user found with this email.");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.send("Incorrect password.");
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  res.cookie('token', token,{
    httpOnly : true,
    maxAge : 24*60*60*1000 //1 day
  })
  res.redirect('/home');
});

app.get('/home', verifyToken, (req,res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get("/logout", (req,res) => {
  res.clearCookie("token");
  res.redirect("/login.html");
});


app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});

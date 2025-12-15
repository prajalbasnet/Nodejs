import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL).then(() => {
    console.log('Database Connected sucessfully');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});


const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const userModel = mongoose.model("User", userSchema);
app.get('/getUsers', async (req, res) => {
    const userData = await userModel.find();
    res.json(userData);
})

// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// const app = express();
// dotenv.config();

// // Allow JSON parsing
// app.use(express.json());

// const PORT = process.env.PORT || 5000;
// const MONGOURL = process.env.MONGODB_URL;

// // Connect to MongoDB
// mongoose.connect(MONGOURL)
//   .then(() => console.log('✅ MongoDB Connected'))
//   .catch(err => console.error('❌ Error connecting to MongoDB:', err));

// // Schema & Model
// const userSchema = new mongoose.Schema({
//     username: String,
//     password: String
// }, { collection: "users" }); // exact collection name

// const userModel = mongoose.model("User", userSchema);

// // Insert user
// app.post('/adduser', async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const user = new userModel({ username, password });
//         await user.save();
//         res.status(201).json({ message: "User added successfully", user });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Fetch all users
// app.get('/getuser', async (req, res) => {
//     try {
//         const users = await userModel.find();
//         res.json(users);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

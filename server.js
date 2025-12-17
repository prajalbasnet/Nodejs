import express from 'express';
import userModel from './usermodel.js';

const app = express();
app.use(express.json());

app.get("/",(req,res) =>{
    res.send("This is Home page");
})

// app.get('/getUsers', async (req,res) => {
//   const user = await userModel.create({
//     username : "prajwal",
//     password: "962954"  
//   })
//   res.send(user);
// })


// app.get('/updateUser', async(req,res) => {
//   const updatedUser = await userModel.findOneAndUpdate(
//     {username: "prajwal"}, //kaslai update garen
//     {username: "Susmita" }, //k update garne
//     {new:true} //updated data return garne
//   )
// res.send(updatedUser);
//  })


//READ OPERATION
//find, findOne, findById

// app.get('/readUser', async (req,res) => {
//   const user = await userModel.findOne(
// //find
//     // {username : "prajwal"},

//     {username : "prajwal"},
//     {username:1, _id:0},
// )
//   res.send(user);
// })


// app.get('/deleteUser/:id', async(req,res) => {
app.get('/deleteUser', async(req,res) => {
  //findOneAndDelete, findByIdAndDelete
  const deletedUser = await userModel.findOneAndDelete(
    // req.params.id
    // {username: "Susmita"}, //kaslai delete garen
  )
res.send(deletedUser);
})


app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
})
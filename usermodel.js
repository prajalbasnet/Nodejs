// import mongoose from 'mongoose';

// // 1. Connect MongoDB
// mongoose.connect('mongodb://localhost:27017/demo')
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

// // 2. Define schema
// const productschema = mongoose.Schema({
//   name: String,
//   price: Number,
// });

// // 3. Create model
// const productmodel = mongoose.model('product', productschema);

// // 4. Export model
// export default productmodel;

// import mongoose from 'mongoose';

// // Connect
// mongoose.connect('mongodb://localhost:27017/demo');

// // Define schema
// const productschema = mongoose.Schema({
//   name: String,
//   price: Number,
// });

// // Create model
// const productmodel = mongoose.model('product', productschema);

// // अब यो file भित्रै productmodel प्रयोग गर्न सकिन्छ
// async function createProduct() {
//   await productmodel.create({ name: "Laptop", price: 50000 });
// }

// createProduct();


// import mongoose from 'mongoose';

// mongoose.connect('mongodb://localhost:27017/demo')
// .then(() => console.log("mongodb connected"))
// .catch((err) => console.log(err));

// //userschema
// const userschema = mongoose.Schema({
//     name : String,
//     age : Number,
//     email : String,
// })

// //usermodel
// const usermodel = mongoose.model('user', userschema);

// async function createUser(){
//     await usermodel.create({name: "sushiii", age : "25", email : "sushi@gmail.com"});
// }
// createUser();

// export default usermodel;


import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/demo')
.then(() => console.log("mongodb connected"))
.catch((err) => console.log(err));

//userschema
const userschema = mongoose.Schema({
    name : String,
    age : Number,
    email : String,
})

//usermodel
const usermodel = mongoose.model('user', userschema);

//read operation
async function readUser() {
    try {
        const users = await usermodel.find();
        console.log("Sabai user vetiyo");
        users.forEach(user => {
          console.log(`name: ${user.name}, age: ${user.age}, email: ${user.email}`);
        })
    } catch (error) {
        console.log("Error in reading users:", error);
    }
   mongoose.connection.close(); 
}
readUser();




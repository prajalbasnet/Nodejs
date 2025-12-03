// import express from "express";
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";
   
// const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.send(`
//     <h1>Welcome to Login page</h1>
//     <form action="/details" method="get">
//       <input type="text" name="username" placeholder="username" />
//       <input type="password" name="password" placeholder="password" />
//       <button type="submit">Login</button>
//     </form>
//   `);
// });

// app.get("/details", (req, res) => {
//   const { username, password } = req.query;

//   const data = `username: ${username}, password: ${password}`;


//   fs.writeFileSync(path.join(__dirname, "info.txt"), data);

//   res.send("<h1>Details saved successfully</h1>");
// });


// app.use((req, res) => {
//   res.status(404).send("<h1>404 Not Found</h1>");
// });

// // Start Server
// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });


// // import express from "express";
// // import path from "path";
// // import { fileURLToPath } from "url";

// // const app = express();
// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);

// // // Middleware for form data
// // app.use(express.urlencoded({ extended: true }));

// // // Login page (like Facebook)
// // app.get("/", (req, res) => {
// //   res.send(`
// //     <h1>Login Page</h1>
// //     <form action="/about" method="post">
// //       <input type="text" name="username" placeholder="Username" required />
// //       <input type="password" name="password" placeholder="Password" required />
// //       <button type="submit">Login</button>
// //     </form>
// //   `);
// // });

// // // About page (show user details)
// // app.post("/about", (req, res) => {
// //   const { username, password } = req.body;

// //   res.send(`
// //     <h1>User Details</h1>
// //     <p>Username: ${username}</p>
// //     <p>Password: ${password}</p>
// //   `);
// // });

// // // Start server
// // const PORT = 3000;
// // app.listen(PORT, () => {
// //   console.log(`Server running at http://localhost:${PORT}`);
// // });


import express from "express";
import path from "path";
import userRouter from "./Routes/userRouter.js";
import hostRouter from "./Routes/hostRouter.js";
import { fileURLToPath } from "url";


const app = express();
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.urlencoded({ extended: false }));
app.use(userRouter)
app.use(hostRouter)

app.use((req,res,next) => {
  res.status(404).sendFile(__dirname, 'views', '404.html')
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
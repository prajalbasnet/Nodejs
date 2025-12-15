import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));

// ---------------- HOME ----------------
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

// ---------------- LOGIN PAGE ----------------
app.get("/login-page", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// ---------------- LOGIN PROCESS ----------------
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const data = `Username: ${username}, Password: ${password}\n`;

  fs.writeFileSync("./login.txt", data, { flag: "a" });

  res.redirect("/registration-page");
});

// ---------------- REGISTRATION PAGE ----------------
app.get("/registration-page", (req, res) => {
  res.sendFile(path.join(__dirname, "registration.html"));
});

// ---------------- SAVE REGISTRATION ----------------
app.post("/register-student", (req, res) => {
  const { fullname, parentname, age, address, contact } = req.body;

  const info = `Fullname: ${fullname}, Parent: ${parentname}, Age: ${age}, Address: ${address}, Contact: ${contact}\n`;

  fs.writeFileSync("./registration.txt", info, { flag: "a" });

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});



// import express from "express";

// const app = express();

// app.use(express.urlencoded({ extended: true }));

// // Receive form data
// app.post("/login", (req, res) => {
//   const { username, password } = req.body;

//   res.send(`
//     <h2>Received Data</h2>
//     <p>Username: ${username}</p>
//     <p>Password: ${password}</p>
//   `);
// });

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });






// // import express from "express";
// // import path from "path";
// // import { fileURLToPath } from "url";

// // const app = express();
 
// // // Needed to create __dirname in ES Modules
// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);

// // app.use(express.urlencoded({ extended: false }));

// // // Serve HTML file
// // app.get("/", (req, res) => {
// //   res.sendFile(path.join(__dirname, "index.html"));
// // });

// // app.post("/details", (req, res) => {
// //   const { username, password } = req.query;

// //   res.send(`
// //     <h1>Details Received</h1>
// //     <p><strong>Username:</strong> ${username}</p>
// //     <p><strong>Password:</strong> ${password}</p>
// //   `);
// // });

// // // 404 route
// // app.use((req, res) => {
// //   res.status(404).send("<h1>404 Not Found</h1>");
// // });

// // // Start Server
// // const PORT = 3001;
// // app.listen(PORT, () => {
// //   console.log(`Server running at http://localhost:${PORT}`);
// // });




// //middileware and routing
// // import express from "express";
// // import path from "path";
// // import userRouter from "./Routes/userRouter.js";
// // import hostRouter from "./Routes/hostRouter.js";
// // import { fileURLToPath } from "url";

// // const app = express();
// // const __filename = fileURLToPath(import.meta.url)
// // const __dirname = path.dirname(__filename)

// // app.use(express.urlencoded({ extended: false }));
// // app.use(userRouter)
// // app.use(hostRouter)

// // app.use((req,res,next) => {
// //   res.status(404).sendFile(__dirname, 'views', '404.html')
// // })
// // const PORT = 3000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running at http://localhost:${PORT}`);
// // });


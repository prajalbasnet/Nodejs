import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const userRouter = express.Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

userRouter.get("/",(req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'home.html'))
})

export default userRouter;
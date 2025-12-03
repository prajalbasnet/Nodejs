import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const hostRouter = express.Router();


hostRouter.get("/add-home",(req, res, next) => {
  res.sendFile(path.join(__dirname, '../', "views",'addhome.html'))
})

hostRouter.post("/home-details",(req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'homeadded.html'))
})

export default hostRouter;
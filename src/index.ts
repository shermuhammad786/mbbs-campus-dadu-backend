import express from "express";
import { connectDB } from "./mongodbConnection/db";
import pdfRouter from "./router/pdf/pdf.router";
import dotenv from "dotenv";
import cors from "cors"
import student from "./router/pdf/students";

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())
app.get("/", (req, res) => {
    res.send("Hello World! from express")
    console.log("object");
})
app.get("/hello", (req, res) => {
    res.send("vercel is deployed")
    console.log("object");
})

app.use("/api", pdfRouter)
app.use("/api", student)



// console.log("hellow");


const PORT = process.env.PORT || 3006
connectDB()
app.listen(PORT, () => console.log("Server running on port " + PORT))
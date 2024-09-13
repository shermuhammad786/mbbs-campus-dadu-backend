import express from "express";
import { connectDB } from "./mongodbConnection/db";
import pdfRouter from "./router/pdf/pdf.router";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())
app.get("/", (req, res) => {
    res.send("Hello World!")
    console.log("object");
})

app.use("/api", pdfRouter)
const PORT = process.env.PORT || 3006
connectDB()
app.listen(PORT, () => console.log("Server running on port 3000"))
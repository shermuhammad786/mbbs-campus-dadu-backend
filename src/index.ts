import express from "express";
import { connectDB } from "./mongodbConnection/db";
import { connection } from "./sqlconnection/sql.connection";
import pdfRouter from "./router/pdf/pdf.router";
import dotenv from "dotenv";
import cors from "cors"
import student from "./router/pdf/students";
import tableRouter from "./router/table/table.router";
import { tabelDataRouter } from "./router/table/tableData.router";

dotenv.config();

connection.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Connection error', err.stack));


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
app.use("/api", tableRouter)

app.use("/api", tabelDataRouter)



// console.log("hellow");


const PORT = process.env.PORT || 3006
app.listen(PORT, () => console.log("Server running on port " + PORT))
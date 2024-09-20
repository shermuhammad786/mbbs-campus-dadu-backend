import mongoose from "mongoose";

const PdfSchema = new mongoose.Schema({
    pdf: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)



export const PdfModel = mongoose.model("PDF", PdfSchema)
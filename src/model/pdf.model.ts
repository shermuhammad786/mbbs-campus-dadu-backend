import mongoose from "mongoose";

const PdfSchema = new mongoose.Schema({
    pdf: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)



export const PdfModel = mongoose.model("PDF", PdfSchema)
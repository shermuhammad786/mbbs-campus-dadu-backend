import { log } from "console";
import { PdfModel } from "../../model/pdf.model";

export const AddPdf = async (req: { body: { user: string; pdf: string } }, res: any) => {
    console.log("added lecture");
    const { subject, desc, pdf }: any = req.body

    if (!subject || !pdf || !desc) {
        return res.status(400).json({ status: false, message: "All fields are required" })
    }

    try {
        const newPdf = new PdfModel({ subject, pdf, desc })

        await newPdf.save()
        return res.status(201).json({ status: true, message: "Pdf added successfully" })
    }
    catch (error) {
        console.log(error);
    }
}
export const updatePdf = async (req: any, res: any) => {
    console.log("updated lecture");
    const { id } = req.params
    const { subject, desc, pdf }: any = req.body

    if (!subject || !pdf || !desc) {
        return res.status(400).json({ status: false, message: "All fields are required" })
    }
    try {
        const update = await PdfModel.findByIdAndUpdate(id, req.body)
        if (update) {
            return res.status(200).json({ status: true, message: "Pdf updated successfully" })
        } else {
            return res.status(404).json({ status: false, message: "Pdf not found" })
        }
    } catch (error) {
        console.log(error);
    }
}
export const deletePdf = async (req: any, res: any) => {
    console.log("deleted lecture");
    const { id } = req.params
    try {
        const delet = await PdfModel.findByIdAndDelete(id)
        if (delet) {
            return res.status(200).json({ status: true, message: "Pdf deleted successfully" })
        }
        else {
            return res.status(404).json({ status: false, message: "Pdf not found" })
        }
    } catch (error) {
        console.log(error);
    }
}
export const getPdf = async (req: any, res: any) => {
    console.log("get lecture");
    try {
        const allPdf = await PdfModel.find();
        if (allPdf) {
            return res.status(200).json({ status: true, allPdf })
        }
        else {
            return res.status(404).json({ status: false, message: "Pdf not found" })
        }
    } catch (error) {
        log(error)
    }
}
export const getPdfById = async (req: any, res: any) => {
    console.log("get by id lecture");
    try {
        const { id } = req.params
        const pdf = await PdfModel.findById(id)
        if (pdf) {
            return res.status(200).json({ status: true, pdf })
        } else {
            return res.status(404).json({ status: false, message: "Pdf not found" })
        }
    } catch (error) {
        log(error)
    }
}
export const getPdfBysubject = async (req: any, res: any) => {
    console.log("get by id lecture");
    try {
        const { subject } = req.params
        const pdf = await PdfModel.find({ subject: subject })
        if (pdf && pdf.length !== 0) {
            return res.status(200).json({ status: true, pdf })
        } else {
            return res.status(404).json({ status: false, message: "Pdf not found" })
        }
    } catch (error) {
        log(error)
    }
}
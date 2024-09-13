import { log } from "console";
import { PdfModel } from "../../model/pdf.model";

export const AddPdf = async (req: { body: { user: string; pdf: string } }, res: any) => {
    const { user, pdf } = req.body

    if (!user || !pdf) {
        return res.status(400).json({ message: "All fields are required" })
    }

    try {
        const newPdf = new PdfModel({ user, pdf })

        await newPdf.save()
        return res.status(201).json({ message: "Pdf added successfully" })
    }
    catch (error) {
        console.log(error);
    }
}
export const updatePdf = async (req: any, res: any) => {
    const { id } = req.params
    const { user, pdf } = req.body

    if (!user || !pdf) {
        return res.status(400).json({ message: "All fields are required" })
    }
    try {
        const update = await PdfModel.findByIdAndUpdate(id, req.body)
        if (update) {
            return res.status(200).json({ message: "Pdf updated successfully" })
        } else {
            return res.status(404).json({ message: "Pdf not found" })
        }
    } catch (error) {
        console.log(error);
    }
}
export const deletePdf = async (req: any, res: any) => {
    const { id } = req.params
    try {
        const delet = await PdfModel.findByIdAndDelete(id)
        if (delet) {
            return res.status(200).json({ message: "Pdf deleted successfully" })
        }
        else {
            return res.status(404).json({ message: "Pdf not found" })
        }
    } catch (error) {
        console.log(error);
    }
}
export const getPdf = async (req: any, res: any) => {
    try {
        const allPdf = await PdfModel.find();
        if (allPdf) {
            return res.status(200).json(allPdf)
        }
        else {
            return res.status(404).json({ message: "Pdf not found" })
        }
    } catch (error) {
        log(error)
    }
}
export const getPdfById = async (req: any, res: any) => {
    try {
        const { id } = req.params
        const pdf = await PdfModel.findById(id)
        if (pdf) {
            return res.status(200).json(pdf)
        } else {
            return res.status(404).json({ message: "Pdf not found" })
        }
    } catch (error) {
        log(error)
    }
}
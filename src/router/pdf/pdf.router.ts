import exprees from "express"
import { AddPdf, deletePdf, getPdf, getPdfById, updatePdf } from "../../controller/pdf/pdf.controller"

const pdfRouter = exprees.Router()

pdfRouter.get("/pdf", getPdf)
pdfRouter.get("/pdf/:id", getPdfById)
pdfRouter.post("/pdf", AddPdf)
pdfRouter.put("/pdf/:id", updatePdf)
pdfRouter.delete("/pdf/:id", deletePdf)

export default pdfRouter





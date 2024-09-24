import { log } from "console";
import { PdfModel } from "../../model/pdf.model";
import mysql from "mysql"

const connection = mysql.createConnection({
    host: "localhost",
    user: "sher12",
    password: "sher123",
    database: "users"
})

connection.connect((err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("mysql db connected")
    }
})

export const AddStudent = async (req: { body: { user: string; pdf: string } }, res: any) => {
    console.log("added lecture");
    const { firstname, lastname, email, rollNo }: any = req.body

    if (!firstname || !lastname || !email || !rollNo) {
        return res.status(400).json({ status: false, message: "All fields are required" })
    }

    try {
        connection.query(`INSERT INTO Students (firstname,lastname,email,rollNo) VALUES ('${firstname}' ,'${lastname}','${email}','${rollNo}')`, (err, result) => {
            if (err) {
                return res.json(err)
            }
            res.json(result)
        })
    }
    catch (error) {
        console.log(error);
    }
}
export const updateStudent = async (req: any, res: any) => {
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
export const deleteStudent = async (req: any, res: any) => {
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
export const getStudents = async (req: any, res: any) => {
    console.log("get lecture");
    try {
        connection.query('SELECT * FROM Students', (err, result) => {
            if (err) {
                return res.json(err)
            }
            res.json(result)
        })
    } catch (error) {
        log(error)
    }
}
export const getStudentById = async (req: any, res: any) => {
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
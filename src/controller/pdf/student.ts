import { log } from "console";
import { PdfModel } from "../../model/pdf.model";
import { Client } from "pg"


// var conString = "postgres://avnadmin:AVNS_18zm3h6Yp5MWQFvQShH@pg-26d91ea0-sherabro141-36ca.l.aivencloud.com:17866/defaultdb";
// var connection = new Client(conString);
// connection.connect();


const connection = new Client({
    host: 'pg-26d91ea0-sherabro141-36ca.l.aivencloud.com',       // Replace with your host
    port: 17866,              // Default PostgreSQL port
    user: 'avnadmin',          // Your PostgreSQL username
    password: 'AVNS_18zm3h6Yp5MWQFvQShH',  // Your PostgreSQL password
    database: 'defaultdb',  // Your database name
    ssl: {
        rejectUnauthorized: false // Set to true for production
    }
    // connectionString: "postgres://avnadmin:AVNS_18zm3h6Yp5MWQFvQShH@pg-26d91ea0-sherabro141-36ca.l.aivencloud.com:17866/defaultdb"
});
// const connection = new Client({
//     host: 'localhost',       // Replace with your host
//     port: 5432,              // Default PostgreSQL port
//     user: 'myuser',          // Your PostgreSQL username
//     password: 'mypassword',  // Your PostgreSQL password
//     database: 'mydatabase',  // Your database name
// });


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
        const rollNo = '531';  // Example roll number
        const newLastname = 'AbroUpdated';
        const newEmail = 'sher.updated@gmail.com';
        // connection.query(`CREATE TABLE studentData`, (err, result) => {
        // connection.query(`INSERT INTO studentData (firstname,lastname,email,rollNo) VALUES ('NEW USER' ,'LASTNAME NEW','NEW@gmail.com','14')`, (err, result) => {

        //     connection.query(`
        // UPDATE studentData 
        // SET lastname = 'update user', email = 'duplicate email' 
        // WHERE id = '2' ` 
        connection.query(`SELECT * FROM studentData`
            , (err, result) => {
                if (err) {
                    console.log('Error executing query:', err.message);
                    return res.status(500).json({ error: 'Failed to update student data', details: err.message });
                }
                if (result.rowCount === 0) {
                    // No rows were updated
                    return res.status(404).json({ message: 'No student found with rollNo 14' });
                }
                res.json({ message: 'Student updated successfully', result });
            });
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
import exprees from "express"
import { AddStudent, deleteStudent, getStudents, getStudentById, getPdfBysubject, updateStudent } from "../../controller/pdf/student"

const student = exprees.Router()

student.get("/student", getStudents)
student.get("/student/:id", getStudentById)
student.post("/student", AddStudent)
student.put("/student/:id", updateStudent)
student.delete("/student/:id", deleteStudent)

export default student;
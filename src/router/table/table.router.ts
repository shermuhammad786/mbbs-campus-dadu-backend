import e from "express";
import { createTable } from "../../controller/table/table.controller";

const tableRouter = e.Router();

tableRouter.post("/table" , createTable);

export default tableRouter
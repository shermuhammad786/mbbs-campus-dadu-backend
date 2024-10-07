import e from "express";
import { createTabelDataController, deleteTabelDataController, getTabelDataController, updateTabelDataController, } from "../../controller/table/tableData.controller";

export const tabelDataRouter = e.Router();

tabelDataRouter.post("/table/data", createTabelDataController)
tabelDataRouter.put("/table/data", updateTabelDataController)
tabelDataRouter.delete("/table/data", deleteTabelDataController)
tabelDataRouter.get("/table/data", getTabelDataController)
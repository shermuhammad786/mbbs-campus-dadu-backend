import { connection } from "../../sqlconnection/sql.connection"

export const getTabelDataController = async (req: any, res: any) => {
    const { tableData } = req.body
    connection.query(tableData, (err, result) => {
        if (err) {
            console.log('Error executing query:', err.message);
            return res.status(500).json({ error: 'Failed to get student data', details: err.message });
        }
        if (result.rowCount === 0) {

            return res.status(404).json({ message: 'No student data found' });
        }
        res.json({ message: 'Student data retrieved successfully', result });
    })
}
export const createTabelDataController = async (req: any, res: any) => {
    const { tableData } = req.body
    connection.query(tableData, (err, result) => {
        if (err) {
            console.log('Error executing query:', err.message);
            return res.status(500).json({ error: 'Failed to create table', details: err.message });
        }
        if (result.command === 'INSERT') {
            return res.status(200).json({ message: 'Table created successfully', result });
        } else {
            return res.status(200).json({ message: 'An error accured', result });
        }
    })
}
export const updateTabelDataController = async (req: any, res: any) => {
    const { tableData } = req.body
    connection.query(tableData, (err, result) => {
        if (err) {
            console.log('Error executing query:', err.message);
            return res.status(500).json({ error: 'Failed to updated table', details: err.message });
        }
        if (result.command === 'UPDATE') {
            return res.status(200).json({ message: 'Table updated successfully', result });
        } else {
            return res.status(200).json({ message: 'An error accured', result });
        }
    })
}
export const deleteTabelDataController = async (req: any, res: any) => {
    const { tableData } = req.body
    connection.query(tableData, (err, result) => {
        if (err) {
            console.log('Error executing query:', err.message);
            return res.status(500).json({ error: 'Failed to deleted table', details: err.message });
        }
        if (result.command === 'DELETE') {
            return res.status(200).json({ message: 'Table deleted successfully', result });
        } else {
            return res.status(200).json({ message: 'An error accured', result });
        }
    })
}
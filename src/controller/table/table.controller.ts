import { connection } from "../../sqlconnection/sql.connection";

export const createTable = async (req: any, res: any) => {
    const { table } = req.body
    try {
        connection.query(table, (err, result) => {
            if (err) {
                console.log('Error executing query:', err.message);
                return res.status(500).json({ error: 'Failed to create table', details: err.message });
            }
            if (result.command === 'CREATE') {
                return res.status(200).json({ message: 'Table created successfully', result });
            } else {
                return res.status(200).json({ message: 'An error accured', result });
            }
        })
    }
    catch (error) {
        console.log(error)
    }
}
import { Client } from "pg"

export const connection = new Client({
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



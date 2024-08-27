import postgres from 'postgres';

export const sql = postgres({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: 'postgres'
});

// Let test the connection and setup basic table
(async () => {
    try {
        let result = await sql`SELECT NOW()`;
        console.log(`connection was successful ${result[0].now}`);
        result = await sql`
            SELECT EXISTS (
                SELECT 
                FROM   information_schema.tables
                WHERE  table_name = 'users'
            ) as table_exists
        `;
        if (!result[0].table_exists) {
            await sql`
                CREATE TABLE users (
                    id SERIAL PRIMARY KEY,
                    name TEXT NOT NULL,
                    email TEXT NOT NULL,
                    password TEXT NOT NULL
                )
            `;
            console.log('Table users created');
            await sql`
                INSERT INTO users (name, email, password) VALUES
                ('John Smith', 'john@example.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8' ),
                ('Jane Doe', 'jane@example.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8' )`;
            if(result.count) {
                console.log("Data inserted successfully");
            };
        } else {
            console.log('Table users already exists');
        }
    } catch (error) {
        console.error(`Failed to connect to the DB ${error}`);
    }
})();

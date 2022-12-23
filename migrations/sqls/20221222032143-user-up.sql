CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL, 
    email VARCHAR(50) UNIQUE NOT NULL,
    userpassword varchar(255) NOT NULL);
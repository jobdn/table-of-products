-- run this command to create database with `new_db` name
create database new_db;

-- run this command to create table on database 
create TABLE product(
    id SERIAL PRIMARY KEY,
    date DATE,
    name VARCHAR(255),
    amount INT,
    distance INT
);
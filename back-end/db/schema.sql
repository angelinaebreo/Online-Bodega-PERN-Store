DROP TABLE IF EXISTS store_dev;
CREATE DATABASE store_dev;
\c store_dev;


CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    price DECIMAL(3,2), 
    category TEXT, 
    is_popular BOOLEAN, 
    img TEXT, 
    review TEXT
);
DROP DATABASE IF EXISTS bodega_dev;
CREATE DATABASE bodega_dev;
\c bodega_dev;


CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    price DECIMAL(3,2), 
    category TEXT, 
    is_popular BOOLEAN, 
    img TEXT, 
    review TEXT
);
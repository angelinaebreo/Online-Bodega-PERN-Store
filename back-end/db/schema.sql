<<<<<<< HEAD
DROP TABLE IF EXISTS bodega_dev;
CREATE DATABASE bodega_dev;
\c bodega_dev;
=======
DROP DATABASE IF EXISTS bodega_dev;
CREATE DATABASE bodega_dev;
\c bodega_dev;


>>>>>>> 4cae67bc13d206b2ca97150279ac674f6decdf2b
CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    price DECIMAL(3,2), 
    category TEXT, 
    is_popular BOOLEAN, 
    img TEXT, 
    review TEXT
);
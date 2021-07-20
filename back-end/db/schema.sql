<<<<<<< HEAD
DROP TABLE IF EXISTS bodega;
--CREATE DATABASE bodega;

-- \c bodega;

CREATE TABLE bodega (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    price TEXT,
    category TEXT,
    is_popular BOOLEAN,
    img_link TEXT,
    reviews TEXT
=======
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
>>>>>>> c86590cd3e6c1a3845de562d889f78fac6bfd65b
);
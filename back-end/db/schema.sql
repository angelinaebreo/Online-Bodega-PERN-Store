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
);
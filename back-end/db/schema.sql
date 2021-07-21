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
    -- review TEXT
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    product TEXT,
    content TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5),
    product_id INTEGER REFERENCES products (id)
    ON DELETE CASCADE
);
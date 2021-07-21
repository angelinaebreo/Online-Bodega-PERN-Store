DROP DATABASE IF EXISTS d6oc82g8rnpad3;
CREATE DATABASE d6oc82g8rnpad3;
\c d6oc82g8rnpad3;

DROP TABLE IF EXISTS products;
CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    price DECIMAL(3,2), 
    category TEXT, 
    is_popular BOOLEAN, 
    img TEXT
   
);

DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    content TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5),
    product_id INTEGER REFERENCES products (id) ON DELETE CASCADE
);
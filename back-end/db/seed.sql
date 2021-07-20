<<<<<<< HEAD
INSERT INTO bodega (name, price, category, is_popular, img_link, reviews) VALUES
('Fanta', '1.50', 'Beverage', true, 'imglink', 'Orange flavor' ),
('Bacon,Egg, and Cheese', '2.50', 'Sandwhich', true, 'imglink', 'Cheesy and Yummy' ),
('Doritos', '1.00', 'Snacks', true, 'imglink', 'crunchy' ),
('lighter', '1.50', 'Mischellaneous', false, 'imglink', 'fire' );

=======
\c store_dev;

INSERT INTO products (name, price, category, is_popular, img, review) VALUES
('coffee', 2.99, beverages, true, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/800px-A_small_cup_of_coffee.JPG', 'good coffee'),
>>>>>>> c86590cd3e6c1a3845de562d889f78fac6bfd65b

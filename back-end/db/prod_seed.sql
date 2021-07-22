
\c d6oc82g8rnpad3;

DELETE FROM products;
INSERT INTO products (name, price, category, is_popular, img) VALUES

('Pepsi', 1.50, 'Beverage', false, 'https://images.unsplash.com/photo-1553456558-aff63285bdd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' ),
('Fanta', 1.00, 'Beverage', false, 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFudGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'),
('Hot coffee', 1.25, 'Beverage', true, 'https://images.unsplash.com/photo-1598908314732-07113901949e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwdG8lMjBnb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'),
('Orange Juice', 2.00, 'Beverage', true, 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'),
('Bacon, Egg, and Cheese Sandwich', 2.50, 'Sandwich', true, 'https://images.unsplash.com/photo-1494695946268-6222f6246c4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80'),
('Philly CheeseSteak Sandwich', 4.25, 'Sandwich', true, 'https://images.unsplash.com/photo-1600555379885-08a02224726d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'),
('BLT Sandwich', 3.00, 'Sandwich', false, 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80'),
('Honey Turkey Hero Sandwich', 4.50, 'Sandwich', true, 'https://images.unsplash.com/photo-1619096534329-564c333a95b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuZHdoaWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'),
('Brownie', 1.00, 'Snacks', true, 'https://images.unsplash.com/photo-1590841609987-4ac211afdde1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fGRlc3NlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'),
('Sour Patch Kids', 1.50, 'Snacks', true, 'https://images.unsplash.com/photo-1592593391430-7f7af152424d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c291ciUyMGNhbmR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'),
('Snickers', 0.45,'Snacks', true, 'https://images.unsplash.com/photo-1611250503393-9424f314d265?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHNvdXIlMjBjYW5keXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'),
('Doritos', 1.00, 'Snacks', true, 'https://images.unsplash.com/photo-1583028281359-bdbfd8639b78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'),
('New York Times', .50, 'Mischellaneous', false, 'https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3cyUyMHBhcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'),
('Wrigleys Doublemint Gum', 1.00, 'Mischellaneous', false, 'https://images.unsplash.com/photo-1576644461179-ddd318c669e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'),
('Face Masks Box', 5.00, 'Mischellaneous', false, 'https://images.unsplash.com/photo-1584634428004-1180accbcc9a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGZhY2UlMjBtYXNrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'),
('Lighter', 1.50, 'Mischellaneous', false, 'https://images.unsplash.com/photo-1575908539629-62b3f98d7b3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGlnaHRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60');


DELETE FROM reviews;
INSERT INTO reviews
(product_id, reviewer, content, rating)
VALUES

((SELECT id FROM products WHERE name = 'Pepsi'), 'Randall', 'What is Coca-cola?', 4 ),
((SELECT id FROM products WHERE name = 'Pepsi'), 'Sasha', 'Pepsi is life', 3),
((SELECT id FROM products WHERE name = 'Fanta'), 'Timothy', 'Fanta-stic', 4 ),
((SELECT id FROM products WHERE name = 'Fanta'), 'Evan',  'Peach flavor is bomb', 3),
((SELECT id FROM products WHERE name = 'Fanta'), 'Tom',  'Light and Sweet. duh', 5),
((SELECT id FROM products WHERE name = 'Hot coffee'), 'Tamie', 'My coffee wasnt hot so now it is Iced Coffee', 2 ),
((SELECT id FROM products WHERE name = 'Hot coffee'), 'Poppy', 'Non-drowsy', 5),
((SELECT id FROM products WHERE name = 'Orange Juice'), 'Juliana', 'Freshly squeezed orange', 5),
((SELECT id FROM products WHERE name = 'Orange Juice'), 'Verline', 'Freshly squeeze, yum.', 5),
((SELECT id FROM products WHERE name = 'Bacon, Egg, and Cheese Sandwich'), 'David', 'Cheesy and Yummy', 4),
((SELECT id FROM products WHERE name = 'Bacon, Egg, and Cheese Sandwich'), 'Rupert', 'Go-to breakfast', 5 ),
((SELECT id FROM products WHERE name = 'Philly CheeseSteak Sandwich'), 'Arcelia', 'NY must have! But it needs extra cheese', 4 ),
((SELECT id FROM products WHERE name = 'Philly CheeseSteak Sandwich'), 'Mr. Mingo', 'NY must have!', 3),
((SELECT id FROM products WHERE name = 'BLT Sandwich'), 'Alison','Bacon, Lettuce, Tomato staple', 4),
((SELECT id FROM products WHERE name = 'BLT Sandwich'), 'Catherine', 'Who eats a BLT without any mayo??!', 2 ),
((SELECT id FROM products WHERE name = 'Honey Turkey Hero Sandwich'), 'Hannah', 'My fave!', 3),
((SELECT id FROM products WHERE name = 'Honey Turkey Hero Sandwich'), 'Pearline',  'I can 10 of them, no joke!', 5 ),
((SELECT id FROM products WHERE name = 'Brownie'), 'Gabi', 'Munchies', 5),
((SELECT id FROM products WHERE name = 'Brownie'), 'Andrew', 'It is very moist', 4 ),
((SELECT id FROM products WHERE name = 'Sour Patch Kids'), 'Jon', 'Blueberry flavor for the win!', 5),
((SELECT id FROM products WHERE name = 'Sour Patch Kids'), 'David', 'Big girls dont cry', 5),
((SELECT id FROM products WHERE name = 'Sour Patch Kids'), 'Bryan', 'First they are sour...then they are sweet! Ha!', 5 ),
((SELECT id FROM products WHERE name = 'Snickers'), 'Marvin', 'You are not you when you are hungry & Im still hungry...', 3),
((SELECT id FROM products WHERE name = 'Snickers'), 'Alex', 'My go-to snack!!', 5),
((SELECT id FROM products WHERE name = 'Snickers'), 'Christie', 'Nacho Cheese with a little bit of Spice.', 5),
((SELECT id FROM products WHERE name = 'New York Times'), 'Melanie', 'It is New York Times, what else is there to say?', 5),
((SELECT id FROM products WHERE name = 'New York Times'), 'Nolen', 'Have to keep with my New York Times', 5 ),
((SELECT id FROM products WHERE name = 'Doritos'), 'Jennifer', 'Fire!', 5),
((SELECT id FROM products WHERE name = 'Doritos'), 'Helen', 'Nacho Cheese haha get it?', 5 ),
((SELECT id FROM products WHERE name = 'Wrigleys Doublemint Gum'), 'Mary', 'So fresh', 4 ),
((SELECT id FROM products WHERE name = 'Face Masks Box'), 'Francisco', 'Color Black', 5),
((SELECT id FROM products WHERE name = 'Face Masks Box'), 'Elijah', 'Cutest Color', 3 ),
((SELECT id FROM products WHERE name = 'Lighter'), 'Tori', 'My lighter stopped working after two uses!', 1 );

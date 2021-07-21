
\c bodega_dev;

INSERT INTO products (name, price, category, is_popular, img) VALUES

('Pepsi', 1.50, 'Beverage', false, 'https://images.unsplash.com/photo-1553456558-aff63285bdd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' ),
('Fanta', 1.00, 'Beverage', false, 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFudGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'),
('Hot coffee', 1.25, 'Beverage', true, 'https://images.unsplash.com/photo-1598908314732-07113901949e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwdG8lMjBnb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'),
('Orange Juice', 2.00, 'Beverage', true, 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'),
('BEC', 2.50, 'Sandwhich', true, 'https://images.unsplash.com/photo-1494695946268-6222f6246c4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80'),
('Philly-Cheese-Steak', 4.25, 'Sandwhich', true, 'https://images.unsplash.com/photo-1600555379885-08a02224726d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'),
('BLT', 3.00, 'Sandwhich', false, 'https://unsplash.com/photos/FZ4y_IDUJ6w'),
('Honey Turkey hero', 4.50, 'Sandwhich', true, 'https://images.unsplash.com/photo-1619096534329-564c333a95b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuZHdoaWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'),
('Brownie', 1.00, 'Snacks', true, 'https://images.unsplash.com/photo-1590841609987-4ac211afdde1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fGRlc3NlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'),
('Sour Patch Kids', 1.50, 'Snacks', true, 'https://images.unsplash.com/photo-1592593391430-7f7af152424d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c291ciUyMGNhbmR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'),
('Snickers', 0.45,'Snacks', true, 'https://images.unsplash.com/photo-1611250503393-9424f314d265?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHNvdXIlMjBjYW5keXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' ),
('Doritos', 1.00, 'Snacks', true, 'https://images.unsplash.com/photo-1583028281359-bdbfd8639b78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' ),
('NewsPaper', .50, 'Mischellaneous', false, 'https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3cyUyMHBhcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'),
('Gum', 1.00, 'Mischellaneous', false, 'https://images.unsplash.com/photo-1576644461179-ddd318c669e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'),
('Face Masks Box', 5.00, 'Mischellaneous', false, 'https://images.unsplash.com/photo-1584634428004-1180accbcc9a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGZhY2UlMjBtYXNrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'),
('Lighter', 1.50, 'Mischellaneous', false, 'https://images.unsplash.com/photo-1575908539629-62b3f98d7b3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGlnaHRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60');

--product_id is the foreign key
INSERT INTO reviews (product_id, reviewer, product, content, rating)
VALUES
('1', 'Randall', 'Pepsi', 'What is Coca-cola?', 4 ),
('2', 'Timothy', 'Fanta', 'Fanta-stic', 4 ),
('3', 'Verline', 'Oj', 'Freshly squeeze, yum.', 5),
('4', 'Tamie', 'Cofffee', 'My coffee wasnt hot so now it is Iced Coffee', 2 ),
('5', 'Rupert', 'BEC' , 'Go-to breakfast', 5 ),
('6', 'Arcelia', 'Philli cheesesteak', 'NY must have! But it needs extra cheese', 4 ),
('7', 'Catherine', 'BLT', 'Who eats a BLT without any mayo??!', 2 ),
('8', 'Pearline', 'Honey Turkey Hero',  'My fave!', 5 ),
('9', 'Andrew', 'Brownie', 'Munchies', 4 ),
('10', 'Bryan', 'Sour Patch kids', 'First they are sour...then they are sweet! Ha!', 5 ),
('11', 'Marvin', 'Snickers', 'You are not you when you are hungry & Im still hungry...', 3),
('12', 'Helen', 'Doritos', 'Nacho Cheese haha get it?', 5 ),
('13', 'Nolen', 'Newspaper', 'Have to keep with my New York Times', 5 ),
('14', 'Mary', 'Gum', 'So fresh', 4 ),
('15', 'Elijah', 'Face masks',  'Cutest Color', 3 ),
('16', 'Tori', 'Lighter', 'My lighter stopped working after two uses!', 1 );



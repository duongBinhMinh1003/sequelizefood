CREATE DATABASE IF NOT EXISTS db_food;
USE db_food;
drop DATABASE db_food
CREATE TABLE IF NOT EXISTS user (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    fullname VARCHAR(100),
    email VARCHAR(100),
    PASSWORD VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS restaurant (
    res_id INT PRIMARY KEY AUTO_INCREMENT,
    res_name VARCHAR(100),
    image VARCHAR(100),
    desc1 VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS food_type (
    type_id INT PRIMARY KEY AUTO_INCREMENT,
    type_name VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS food (
    food_id INT PRIMARY KEY AUTO_INCREMENT,
    food_name VARCHAR(100),
    image VARCHAR(100),
    price FLOAT,
    desc1 VARCHAR(50),
    type_id INT,
    sub_id INT,
    FOREIGN KEY (type_id) REFERENCES food_type(type_id)
);

CREATE TABLE IF NOT EXISTS sub_food (
    sub_id INT PRIMARY KEY AUTO_INCREMENT,
    sub_name VARCHAR(100),
    sub_price FLOAT,
    food_id INT,
    FOREIGN KEY (food_id) REFERENCES food(food_id)
);

CREATE TABLE IF NOT EXISTS rate_res (
	id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    res_id INT,
    amount INT,
    date_rate DATETIME,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);

CREATE TABLE IF NOT EXISTS user_in_res (
    user_id INT,
    res_id INT,
    full_name VARCHAR(100),
    PASSWORD VARCHAR(100),
    image VARCHAR(100),
    PRIMARY KEY (user_id, res_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);

CREATE TABLE IF NOT EXISTS user_food (
    user_id INT,
    food_id INT,
    PRIMARY KEY(user_id, food_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (food_id) REFERENCES food(food_id)
);
drop TABLE orders
CREATE TABLE IF NOT EXISTS orders (
	id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    food_id INT,
    amount INT,
    code VARCHAR(100),
    arr_sub_id VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (food_id) REFERENCES food(food_id)
);
INSERT INTO orders (user_id, food_id, amount, code, arr_sub_id)
VALUES
    (1, 1, 2, 'code1', '1,2,3'),
    (2, 2, 1, 'code2', '4,5'),
    (3, 3, 3, 'code3', '6');
    



CREATE TABLE like_res (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    res_id INT,
    date_time DATETIME,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);

INSERT INTO like_res (user_id, res_id, date_time) 
VALUES 
    (1, 2, '2024-03-28 12:00:00'),
    (3, 4, '2024-03-28 13:00:00'),
    (5, 6, '2024-03-28 14:00:00'),
    (7, 8, '2024-03-28 15:00:00'),
    (9, 10, '2024-03-28 16:00:00');

    

-- Inserting data into the user table
INSERT INTO user (fullname, email, PASSWORD) 
VALUES 
    ('John Doe', 'john@example.com', 'password123'),
    ('Alice Smith', 'alice@example.com', 'password456'),
    ('Bob Johnson', 'bob@example.com', 'password789'),
    ('Mary Brown', 'mary@example.com', 'password101'),
    ('Michael Davis', 'michael@example.com', 'password202'),
    ('Emily Wilson', 'emily@example.com', 'password303'),
    ('David Miller', 'david@example.com', 'password404'),
    ('Sarah Lee', 'sarah@example.com', 'password505'),
    ('James Taylor', 'james@example.com', 'password606'),
    ('Jennifer Martinez', 'jennifer@example.com', 'password707'),
    ('William Rodriguez', 'william@example.com', 'password808'),
    ('Emma Garcia', 'emma@example.com', 'password909'),
    ('Daniel Hernandez', 'daniel@example.com', 'password010'),
    ('Olivia Gonzalez', 'olivia@example.com', 'password111'),
    ('Matthew Lopez', 'matthew@example.com', 'password212'),
    ('Ava Perez', 'ava@example.com', 'password313'),
    ('Noah Torres', 'noah@example.com', 'password414'),
    ('Sophia Flores', 'sophia@example.com', 'password515'),
    ('Ethan Rivera', 'ethan@example.com', 'password616'),
    ('Isabella Ramirez', 'isabella@example.com', 'password717');


-- Inserting data into the restaurant table
INSERT INTO restaurant (res_name, image, desc1) 
VALUES 
    ('Restaurant A', 'image_a.jpg', 'Description of Restaurant A'),
    ('Restaurant B', 'image_b.jpg', 'Description of Restaurant B'),
    ('Restaurant C', 'image_c.jpg', 'Description of Restaurant C'),
    ('Restaurant D', 'image_d.jpg', 'Description of Restaurant D'),
    ('Restaurant E', 'image_e.jpg', 'Description of Restaurant E'),
    ('Restaurant F', 'image_f.jpg', 'Description of Restaurant F'),
    ('Restaurant G', 'image_g.jpg', 'Description of Restaurant G'),
    ('Restaurant H', 'image_h.jpg', 'Description of Restaurant H'),
    ('Restaurant I', 'image_i.jpg', 'Description of Restaurant I'),
    ('Restaurant J', 'image_j.jpg', 'Description of Restaurant J'),
    ('Restaurant K', 'image_k.jpg', 'Description of Restaurant K'),
    ('Restaurant L', 'image_l.jpg', 'Description of Restaurant L'),
    ('Restaurant M', 'image_m.jpg', 'Description of Restaurant M'),
    ('Restaurant N', 'image_n.jpg', 'Description of Restaurant N'),
    ('Restaurant O', 'image_o.jpg', 'Description of Restaurant O'),
    ('Restaurant P', 'image_p.jpg', 'Description of Restaurant P'),
    ('Restaurant Q', 'image_q.jpg', 'Description of Restaurant Q'),
    ('Restaurant R', 'image_r.jpg', 'Description of Restaurant R'),
    ('Restaurant S', 'image_s.jpg', 'Description of Restaurant S'),
    ('Restaurant T', 'image_t.jpg', 'Description of Restaurant T');


-- Inserting data into the food_type table
INSERT INTO food_type (type_name) VALUES
('Appetizer'),
('Main Course'),
('Dessert');

-- Inserting data into the food table
INSERT INTO food (food_name, image, price, desc1, type_id, sub_id) VALUES
('Caesar Salad', 'caesar_salad.jpg', 8.99, 'Fresh salad with Caesar dressing', 1, NULL),
('Spaghetti Bolognese', 'spaghetti_bolognese.jpg', 12.99, 'Classic Italian pasta dish with meat sauce', 2, NULL),
('Cheesecake', 'cheesecake.jpg', 6.99, 'Creamy cheesecake with strawberry topping', 3, NULL);
-- Inserting data into the rate_res table
INSERT INTO rate_res (user_id, res_id, amount, date_rate) VALUES
(1, 1, 4, '2024-03-27 08:00:00'),
(2, 2, 5, '2024-03-27 09:00:00'),
(3, 3, 3, '2024-03-27 10:00:00');

-- Inserting data into the sub_food table
INSERT INTO sub_food (sub_name, sub_price, food_id) VALUES
('Extra Cheese', 1.5, 2),
('Garlic Bread', 2.0, 2),
('Chocolate Sauce', 0.75, 3);

-- Inserting data into the user_food table
INSERT INTO user_food (user_id, food_id) VALUES
(1, 1),
(2, 2),
(3, 3);

-- Inserting data into the user_in_res table
INSERT INTO user_in_res (user_id, res_id, full_name, PASSWORD, image) VALUES
(1, 1, 'John Doe', 'password123', 'john_doe.jpg'),
(2, 2, 'Alice Smith', 'password456', 'alice_smith.jpg'),
(3, 3, 'Bob Johnson', 'password789', 'bob_johnson.jpg');


SELECT  `user_id`, `res_id`, `date_time` FROM `like_res` AS `like_res` WHERE `like_res`.`user_id` = '1' AND `like_res`.`res_id` = '2' LIMIT 1;



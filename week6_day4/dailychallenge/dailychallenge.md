CREATE TABLE items (
item_id SERIAL PRIMARY KEY,
item_name VARCHAR(200),
price MONEY
);

CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
first_name VARCHAR(200),
last_name VARCHAR(200)
);

CREATE TABLE orders (
order_id SERIAL PRIMARY KEY,
item_id SMALLINT,
user_id SMALLINT,
date DATE,
FOREIGN KEY (item_id) REFERENCES items(item_id),
FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO items
(item_name,price)
VALUES
('soup','9'),
('ice cream','6'),
('sandwich','12'),
('scone','5'),
('bread','5'),
('olives','4')

INSERT INTO users
(first_name, last_name)
VALUES
('Paul','McCartney'),
('George','Harrison'),
('Ringo','Starr'),
('John','Lennon')
	

INSERT INTO orders
(user_id, item_id, date)
VALUES
(2,6,'01-04-2020'),
(3,1,'01-05-2020'),
(3,2,'02-19-2020'),
(3,1,'02-05-2020'),
(3,1,'03-24-2020'),
(4,5,'04-30-2020'),
(4,6,'04-15-2020'),
(4,2,'05-11-2020'),
(3,5,'05-01-2020'),
(1,5,'06-23-2020'),
(1,2,'07-01-2020'),
(4,5,'08-02-2020'),
(3,2,'09-19-2020'),
(2,5,'12-18-2020')





CREATE OR REPLACE FUNCTION getOrderPrice(order_id INTEGER)
  returns MONEY
  language plpgsql
  AS

$$
DECLARE
  total MONEY;

BEGIN
  SELECT price
  INTO total
  FROM items i
  INNER JOIN orders o
  ON i.item_id = o.item_id;
  RETURN total;

END;
$$;

--to call function
select getOrderPrice(2)












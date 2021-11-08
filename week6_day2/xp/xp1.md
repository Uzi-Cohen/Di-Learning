--1. 

SELECT item,price FROM items
ORDER BY price

SELECT item,price FROM items
WHERE  price >= '80'
ORDER BY price DESC

SELECT first_name,last_name FROM customers
ORDER BY first_name
LIMIT 3

SELECT last_name FROM customers
ORDER BY last_name DESC


--2

CREATE TABLE purchases (
customer_id smallint,
item_id smallint
)

INSERT INTO purchases(customer_id, item_id)
VALUES (4,NULL)
--yes it works, because I didn't disallow null

INSERT INTO purchases(customer_id, item_id)
VALUES
(1,3),
(2,2),
(3,2),
(4,1),
(5,3)

--3


SELECT * FROM purchases
--not useful

SELECT first_name,last_name,item_id
FROM purchases
INNER JOIN customers
ON customers.id = customer_id

SELECT first_name,last_name,item_id, customers.id
FROM purchases
INNER JOIN customers
ON customers.id = customer_id
WHERE customer_id > 4

SELECT first_name,last_name, item
FROM purchases
INNER JOIN customers
ON customers.id = customer_id
INNER JOIN items
ON items.id = item_id
WHERE item = 'Large Desk' or item = 'Small Desk'

--4

INSERT INTO items
(item, price)
VALUES
('Hard Drive','160')
RETURNING *

INSERT INTO purchases
(customer_id, item_id)
VALUES(3,4)

--5

SELECT first_name,last_name,item
FROM customers
INNER JOIN purchases
ON customers.id = customer_id
INNER JOIN items
ON items.id = item_id












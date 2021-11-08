--1
SELECT name FROM language


--2
SELECT title,description,name AS language
FROM film
INNER JOIN language
ON film.language_id = language.language_id

SELECT title,description,name AS language
FROM film
LEFT JOIN language
ON film.language_id = language.language_id

SELECT title,description,name AS language
FROM film
RIGHT JOIN language
ON film.language_id = language.language_id


--3
CREATE TABLE new_film(
id SERIAL PRIMARY KEY,
name VARCHAR(100)
)

INSERT INTO new_film
(name)
VALUES
('Red December'),
('Blue Spring'),
('Green Moon'),
('Yellow Afternoons')


--4
CREATE TABLE customer_review (
review_id SERIAL NOT NULL PRIMARY KEY,
film_id integer REFERENCES new_film (id) ON DELETE CASCADE,
language_id smallint,
title VARCHAR(100),
score smallint,
review_text TEXT,
last_update DATE
)


--5
INSERT INTO customer_review
(film_id,language_id,title,score,review_text,last_update)
VALUES
(2,4,'Shockingly awful',1,'This is the worst film I''ve seen in my life. Not recommended.','5-11-2021'),
(4,3,'A veritable sleeping aid',1,'Bored me to tears. I want my money back.','5-12-2021')


-6
DELETE FROM new_film
WHERE id=4
--the review was deleted as well











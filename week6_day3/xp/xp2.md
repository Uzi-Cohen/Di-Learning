--1
UPDATE film
SET language_id = 2
WHERE film_id IN (133,158,160,204)
RETURNING *

UPDATE film
SET language_id = 4
WHERE film_id IN (913,23,109,449,300,292,322,877,12,123,423,299,483,954,775)
RETURNING *

--2
--store_id,address-id
--when you insert you have to use the right store and address id numbers. you can look them up before, or do a nested select statement where you get the value from the other table

--3
--yes it is easy.

--4
select count(1) from rental
WHERE return_date IS NULL

--5
select film.film_id,title,replacement_cost from film
INNER JOIN inventory
ON inventory.film_id = film.film_id
INNER JOIN rental
ON inventory.inventory_id = rental.inventory_id
WHERE return_date IS NULL
ORDER BY replacement_cost DESC
LIMIT 30

--6
--6.1
SELECT title,fulltext FROM actor
INNER JOIN film_actor
ON actor.actor_id = film_actor.actor_id
INNER JOIN film
ON film_actor.film_id = film.film_id
WHERE first_name = 'Penelope' AND last_name = 'Monroe'
AND fulltext @@ to_tsquery('sumo')
	

--6.2
SELECT title,category FROM film
INNER JOIN film_category
ON film.film_id = film_category.film_id
INNER JOIN category
ON film_category.category_id = category.category_id
WHERE category.name = 'Documentary'
AND length < 60
AND rating = 'R'


--6.3
SELECT title, return_date, first_name, last_name, amount
FROM film f
INNER JOIN inventory i
ON f.film_id = i.film_id
INNER JOIN rental r
ON i.inventory_id = r.inventory_id
INNER JOIN customer c
ON r.customer_id = c.customer_id
INNER JOIN payment p
ON r.rental_id = p.rental_id

WHERE first_name = 'Matthew'
AND last_name = 'Mahan'
AND amount > 4
AND return_date BETWEEN '7-28-2005' AND '8-1-2005'


--6.4
SELECT title, first_name, last_name, description, replacement_cost
FROM film f
INNER JOIN inventory i
ON f.film_id = i.film_id
INNER JOIN rental r
ON i.inventory_id = r.inventory_id
INNER JOIN customer c
ON r.customer_id = c.customer_id


WHERE first_name = 'Matthew'
AND last_name = 'Mahan'
AND (title LIKE '%Boat%'
OR description LIKE '%Boat%')
ORDER BY replacement_cost DESC








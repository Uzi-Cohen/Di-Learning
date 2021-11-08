
‪--1‬
‪SELECT * FROM customer‬

‪--2‬
‪SELECT first_name || ' ' || last_name AS full_name‬
‪FROM customer‬

‪--3‬
‪SELECT DISTINCT create_date FROM customer‬

‪--4‬
‪SELECT * FROM customer‬
‪ORDER BY first_name DESC‬

‪--5‬
‪SELECT film_id, title,description, release_year,rental_rate‬
‪ORDER BY rental_rate‬

‪--6‬
‪SELECT address,phone FROM address‬
‪WHERE district = 'Texas'‬

‪--7‬
‪SELECT * FROM film‬
‪WHERE film_id = 15 or film_id = 50‬

‪--8‬
‪SELECT film_id,title,description,length,rental_rate‬
‪FROM film‬
‪WHERE title = 'Novocaine Flight'‬

‪--9‬
‪SELECT film_id,title,description,length,rental_rate‬
‪FROM film‬
‪WHERE title LIKE 'No%'‬

‪--10‬
‪SELECT film_id,title,replacement_cost FROM film‬
‪ORDER BY replacement_cost‬
‪LIMIT 10‬

‪--11‬
‪SELECT film_id,title,replacement_cost FROM film‬
‪ORDER BY replacement_cost‬
‪OFFSET 10‬
‪LIMIT 10‬

‪SELECT film_id,title,replacement_cost FROM film‬
‪ORDER BY replacement_cost‬
‪OFFSET 10‬
‪FETCH NEXT 10 ROWS ONLY‬


‪--12‬
‪SELECT customer.customer_id,first_name,last_name,payment_date FROM payment‬
‪INNER JOIN customer‬
‪ON customer.customer_id = payment.customer_id‬
‪ORDER BY customer_id‬

‪--13‬

‪SELECT title FROM film‬
‪LEFT JOIN inventory‬
‪ON film.film_id = inventory.film_id‬
‪WHERE inventory.film_id IS NULL‬

‪--14‬
‪SELECT city, country FROM city‬
‪INNER JOIN country‬
‪ON city.country_id = country.country_id‬


‪--BONUS‬

‪SELECT‬
‪customer.customer_id,first_name,last_name,‬
‪amount,payment_date,staff_id‬
‪FROM customer‬
‪INNER JOIN payment‬
‪ON customer.customer_id = payment.customer_id‬
‪ORDER BY staff_id‬










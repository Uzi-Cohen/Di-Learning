--Basic Select Statement

--1
SELECT first_name AS "First Name", last_name AS "Last Name"
FROM employees

--2
SELECT DISTINCT department_id FROM employees

--3
SELECT * FROM employees 
ORDER BY first_name DESC

--4
SELECT first_name,last_name,ROUND(.15 * salary,2) AS PF
FROM employees

--5
SELECT  employee_id,first_name,last_name,salary
FROM employees
ORDER BY salary

--6
SELECT SUM(salary) FROM employees

--7
SELECT MAX(salary), MIN(salary) FROM employees

--8
SELECT ROUND(AVG(salary),2) FROM employees

--9
SELECT COUNT(1) FROM employees

--10
SELECT UPPER(first_name) from employees

--11
SELECT SUBSTRING(first_name,1,3) from employees

--12
SELECT first_name || ' ' || last_name FROM employees

--13
SELECT  first_name, last_name, LENGTH(first_name || last_name) FROM employees

--14
SELECT  first_name FROM employees
WHERE first_name ~ '\d';


--15
SELECT * FROM employees
LIMIT 10



--Restricting and sorting

--1
SELECT  first_name,last_name,salary FROM employees
WHERE salary BETWEEN 10000 AND 15000	

--2
SELECT  first_name,last_name,hire_date FROM employees
WHERE hire_date BETWEEN '01-01-1986' AND '12-31- 1988'

--3
SELECT first_name,last_name FROM employees
WHERE (first_name LIKE '%c%' OR first_name LIKE '%C%')
AND (first_name LIKE '%e%' OR first_name LIKE '%E%')

--4
SELECT last_name,job_title,salary
FROM employees e
INNER JOIN jobs j
ON e.job_id = j.job_id
WHERE job_title NOT IN('Programmer','Shipping Clerk')
AND salary NOT IN(4500,10000,15000)

--5
SELECT last_name FROM employees
WHERE LENGTH(last_name) = 6

--6
SELECT last_name FROM employees
WHERE SUBSTRING(last_name,3,1) = 'e'

--7
SELECT DISTINCT job_title
FROM jobs j
 INNER JOIN employees e
ON j.job_id = e.job_id

--8
SELECT * FROM employees
WHERE last_name IN ('Jones','Blake','Scott','King','Ford')









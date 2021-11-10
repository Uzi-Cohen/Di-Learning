--Update statement

--1;

ALTER TABLE employees ADD COLUMN commission_pct decimal

UPDATE employees
SET email = 'not available',
commission_pct = 0.1
WHERE department_id = 110
returning *

--2
UPDATE employees e
INNER JOIN departments d
ON e.department_id = d.department_id
SET email = 'available'
WHERE department_name = 'Accounting'

UPDATE employees
SET email = 'available'
FROM employees e
INNER JOIN departments d
ON e.department_id = d.department_id
WHERE department_name = 'Accounting'

--neither of the above worked. the second one updated all the emails










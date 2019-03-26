SELECT employee_id, AVG(salary)
FROM Employees
GROUP BY job_id
HAVING SUM(salary) > 13000;
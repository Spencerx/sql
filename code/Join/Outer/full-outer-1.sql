SELECT *
FROM Order
LEFT OUTER JOIN Employees
USING (P_Code)

UNION

SELECT *
FROM Order
RIGHT OUTER JOIN Employees
USING (P_Code);
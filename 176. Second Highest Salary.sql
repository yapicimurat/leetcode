SELECT IFNULL((SELECT
Employee.salary
FROM Employee GROUP BY Employee.salary
ORDER BY Employee.salary DESC LIMIT 1,1), NULL) as 'SecondHighestSalary';

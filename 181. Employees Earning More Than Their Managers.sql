SELECT
employee.name as 'Employee'
FROM Employee as employee
JOIN Employee as manager
ON employee.managerId = manager.id
WHERE employee.salary > manager.salary;

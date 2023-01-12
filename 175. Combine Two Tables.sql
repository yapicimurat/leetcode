SELECT 
Person.firstName, Person.lastName, Address.city, Address.state
FROM Person LEFT JOIN Address ON Address.personId = Person.personId;

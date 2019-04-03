# Introduction to Normalization
Database normalization is the **process of structuring a relational database** in accordance with a series of so-called normal forms **in order to reduce data redundancy and improve data integrity.** It was first proposed by Edgar F. Codd as an integral part of his relational model.

Normalization entails organizing the columns (attributes) and tables (relations) of a database to **ensure that their dependencies are properly enforced by database integrity constraints**. 

It is accomplished by applying some formal rules either by a process of synthesis (creating a new database design) or decomposition (improving an existing database design). -- Wikipedia.com

## Dependency 
If attribute A determines the value of B, we write this A -> B — meaning that B is functionally dependent on A. In this relationship, A determines the value of B, while B depends on A.

## Full Dependency
All Candidate Key must determines the value of all non-key attributes.

## Partial Dependency
A part of a candidate key (mostly from composite key) can determine a non-key attribute

## Transitive Dependency
A non-key attribute can determine a non-key attribute

## Functional Dependency


-----
#### Citations + Reference
- [https://en.wikipedia.org/wiki/Database_normalization][Ref1]
- [https://www.lifewire.com/full-functional-dependency-1019753][Ref2]
- [https://en.wikipedia.org/wiki/Functional_dependency][Ref3]

[Ref1]: https://www.lifewire.com/full-functional-dependency-1019753
[Ref2]: https://en.wikipedia.org/wiki/Database_normalization
[Ref3]: https://en.wikipedia.org/wiki/Functional_dependency
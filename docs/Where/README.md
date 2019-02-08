# WHERE
`WHERE` keywords allows you to add arguments to the query.<br>
For example, you liked to get the data as First Name is 'John'.

## Syntax
<<< @/code/Where/where-usage.sql

## Where in some rows of data
### Where the column name matched (equals to)
If you liked to find the rows that have `first_name` as 'Jeff', this is how you write it.

<<< @/code/Where/where-equal-employee.sql

### Where the column name is more than / less than
<<< @/code/Where/where-more-than-employee.sql

### Using `and` / `or` / `not` as argument merging
<<< @/code/Where/where-and-employee.sql

## Using `LIKE` in WHERE
The idea of like is like regular expressions in SQL.
- `%` - represents a wild card for zero, one, or multiple characters
- `_` - represents a wild card for single character

Example :<br>
Wants to get all the employees that have the **first name** that **starts with J**

<<< @/code/Where/where-like-1-employee.sql

Example :<br>
Wants to get the result in the column that the first name **starts with ‘J’ and have 4 more alphabet after it**

<<< @/code/Where/where-like-2-employee.sql

Example :<br>
Wants to get the result in the first name **starts with ‘J’ and the third alphabet is ‘h’**

<<< @/code/Where/where-like-3-employee.sql

Example :<br>
Wants to get the result in the first name **starts with ‘J’ and ends with ‘n’**

<<< @/code/Where/where-like-4-employee.sql

## Using `IN` keyword
IN keyword is similar result to match. But if one matched in a list, it is a matched and it will be shown in the result.

<<< @/code/Where/where-in-employee.sql

and it will result in the column that the first name **is either ‘John’ or ‘Jeff’**

## Using `BETWEEN` keyword
Equivalent to `[value1] <= [column_name] <= [value2]` in Math equation

<<< @/code/Where/where-between-usage-employee.sql

Example :<br>
Show every first_name that salary is between 2000 and 5000

<<< @/code/Where/where-between-employee.sql


## Nested WHERE arguments

### Where the cell data is more than computed cell
<<< @/code/Where/where-more-than-compute-employee.sql
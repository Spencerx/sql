# SELECT & FROM

## Syntax
<<< @/code/Select/select-usage.sql

## Select result based on column selection
To choose an column to be shown as the result of the query, SELECT is used.

### Select all from table
To select all columns from the table, use `*` as the column name.

<<< @/code/Select/select-all-employee.sql

### Select some column from table
To choose the column to show, type in the column name and separate it with commas

<<< @/code/Select/select-some-employee.sql

## Select `DISTINCT` column
<<< @/code/Select/select-distinct-employee.sql

the result will not have duplicates (because using `DISTINCT` keyword)

### Modify the result with calculations
<<< @/code/Select/select-calculation-employee.sql

and that will show the salary column and the column that is a value of the salary times 100.

## Change column name
### Temporary change column name with `AS`
<<< @/code/Select/select-as-employee.sql

`AS` keyword also can be skipped.
NOTE : use backslash \` to marked it as a string

### Use `CONCAT` to merge row-column value
<<< @/code/Select/select-concat-employee.sql

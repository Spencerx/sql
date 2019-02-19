# Outer - Full Outer Join
Full Outer Join allows data that is matched from table_a and table_b, but also shows the data that table_a have and b does not have and table_b value that a does not have.

Venn Diagram is shown below.
![Select all from Table A and B](https://static1.squarespace.com/static/5732253c8a65e244fd589e4c/t/5744be65c6fc08b3af1b0fbd/1464122985024/?format=300w)

## Syntax <Badge text="MySQL Only" type="warn" vertical="middle"/>
In the MySQL, there is no full outer join. To do the full outer join, left join and right join is needed and later **union** with each other to get the same result as full outer join.

<<< @/code/Join/Outer/full-outer-usage.sql

## Example
### Example One

<<< @/code/Join/Outer/full-outer-1.sql
# TOP
The SELECT TOP clause is used to specify the number of records to return.

The SELECT TOP clause is useful on large tables with thousands of records. Returning a large number of records can impact on performance.

## Syntax 
<Badge text="SQL Server Compatible" type="tip" vertical="middle"/>
<<< @/code/Top/top-usage-sql.sql

--- 

<Badge text="MySQL Compatible" type="tip" vertical="middle"/>
As the MySQL does not support `TOP`, we can use `LIMIT` to find a workaround instead.<br>
Reference : [StackOverflow][Ref1]

[Ref1]: https://stackoverflow.com/questions/2249905/is-there-an-alternative-to-top-in-mysql

<<< @/code/Top/top-usage-mysql.sql


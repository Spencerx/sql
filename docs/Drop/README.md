# DROP table
Drop table will **delete the table structure** which also deletes all the data that is inside that table.

::: tip NOTE
Not to be confused with [`DELETE`]() keyword

**You cannot revert** the DROP command (For example with [`ROLLBACK`](/Rollback/))
:::

## Syntax
```sql
DROP TABLE [table_name];
```

## Example One
``` sql
DROP TABLE Employees;
```

## DROP table with foreign key
In the normal `drop`, there is no foreign key to worried about. But when you need to drop a table that have a foreign key constraint, the **Reference Integrity Constraint** comes in. So we need to revoke the constraint check for a while

```sql
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE employee;
```

and do not forget to turn the check on
```sql
SET FOREIGN_KEY_CHECKS = 1;
```

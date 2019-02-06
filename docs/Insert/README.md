# INSERT INTO
```sql
INSERT INTO [table name]
VALUES ([value1], [value2] ...);
```

For example
```sql
INSERT INTO lab_location(location_id,location_name)
VALUES (002,'Rayong'),(003,'Ranong');
```

If the column name is not given, all of the column will requires data and in a left to right pattern.
```sql
INSERT INTO lab_location
VALUES (002,'Rayong'),(003,'Ranong');
```

but the **values need to have the same value size + data type as the table**

## Insert with `NULL` value
WARNING : Adding NULL value to the table may result in column / table conflicts

### Implicitly give a Null value
```sql
INSERT INTO lab_location(location_id)
VALUES (002);
```
As column `location_name` is not given, data store will store a default of `NULL` value.

::: tip Note
Non given value will retrieve default value.<br>
    You can set the default value when creating a new table or modifying a column settings.
:::

### Explicitly give a Null value
```sql
INSERT INTO lab_location
VALUES (002, NULL)
```
Explicitly defined that `location_name` to be `NULL` value.

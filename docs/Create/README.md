# CREATE table
## Syntax
<<< @/code/Create/create-syntax.sql

You can find more information about [Data Types]() and [Constraints]() in the following link.

Also, you cannot create a table without a Primary Key.

## Example
### Example One
Create a table `Employees` with following columns and data types

| Name | Data Type | PK | AI | UQ | NN | FK | Ref. FK |
|-|-|-|-|-|-|-|-|
|id|INT(10)|
|first_name|VARCHAR(255)|
|last_name|VARCHAR(255)|
|salary|INT(10)|

and the result will come out like this

<<< @/code/Create/create-example-one.sql

::: tip Note
Margining the datatypes or constraints is not required by SQL compiler, but we do it for cleaner reading.
:::

## Create `PRIMARY KEY` constraints
### Example One
Create a table `Employees` with following columns and data types.<br>
This time, we choose `id` attribute as the table Primary Key.

| Name | Data Type | PK | AI | UQ | NN | FK | Ref. FK |
|-|-|-|-|-|-|-|-|
|id|INT(10)|:ballot_box_with_check:|
|first_name|VARCHAR(255)|
|last_name|VARCHAR(255)|
|salary|INT(10)|

<<< @/code/Create/create-example-pk-one.sql

::: tip Note
Table constraint name is not required to be in format. You will have to remember it to delete that constraint.
:::

### Example Two
Create a table `Employees` with following columns and data types.<br>
This time, we choose `id` **and** `first_name` attribute as the table Primary Key (As a Composite Primary Key)

| Name | Data Type | PK | AI | UQ | NN | FK | Ref. FK |
|-|-|-|-|-|-|-|-|
|id|INT(10)|:ballot_box_with_check:|
|first_name|VARCHAR(255)|:ballot_box_with_check:|
|last_name|VARCHAR(255)|
|salary|INT(10)|

<<< @/code/Create/create-example-pk-two.sql

## Adding `FOREIGN KEY` constraints
Similar to Primary Key, but we have to point the Foreign Key to another table attribute.

### Example One
Create a table `Employees` with following columns and data types.<br>
This time, we must retrieve `salary` attribute from the `Expense` table from `salary` attribute. 

| Name | Data Type | PK | AI | UQ | NN | FK | Ref. FK |
|-|-|-|-|-|-|-|-|
|id|INT(10)|:ballot_box_with_check:|
|first_name|VARCHAR(255)|:ballot_box_with_check:|
|last_name|VARCHAR(255)|
|salary|INT(10)|||||:ballot_box_with_check:|Expense(salary)|

<<< @/code/Create/create-example-fk-one.sql

Now the foreign key of `salary` will retrieve data from the `salary` attribute in `Expense` table.

## Foreign Key additional constraints
Foreign key might be delete easily, so you can put options on what to do when the record in other table is gone or update

### ON DELETE
When other table record is gone, what do the record in this table do?

::: warning
You can choose **only one** option. Choose wisely.
:::

|Option|Syntax|Benefit|
|-|-|-|
|No action||Will not allow deletion of that (mother table) row|
|Cascade|`ON DELETE CASCADE`|will delete dependent row when mother table is deleted|
|Set Null|`ON DELETE SET NULL`|will set foreign key that cannot be referenced as NULL|
|Set Default|`ON DELETE SET DEFAULT|The foreign key attribute will set to default value (if specified default value)|

by adding these constraints, the row will delete safely (able to delete normally). If not, the reference integrity will blocked you from deleting the row.

### ON UPDATE
When other table record is gone, what do the record in this table do?

::: warning
You can choose **only one** option. Choose wisely.
:::

|Option|Syntax|Benefit|
|-|-|-|
|No action||Will not allow deletion of that (mother table) row|
|Cascade|`ON DELETE CASCADE`|will delete dependent row when mother table is deleted|
|Set Null|`ON DELETE SET NULL`|will set foreign key that cannot be referenced as NULL|
|Set Default|`ON DELETE SET DEFAULT|The foreign key attribute will set to default value (if specified default value)|

by adding these constraints, the row will delete safely (able to delete normally). If not, the reference integrity will blocked you from deleting the row.

## Adding `NOT NULL` constraints
### Example One
Create a table `Employees` with following columns and data types.<br>
This time, we choose `id` attribute as the table Primary Key.

| Name | Data Type | PK | AI | UQ | NN | FK | Ref. FK |
|-|-|-|-|-|-|-|-|
|id|INT(10)|:ballot_box_with_check:|
|first_name|VARCHAR(255)||||:ballot_box_with_check:|
|last_name|VARCHAR(255)||||:ballot_box_with_check:|
|salary|INT(10)|

<<< @/code/Create/create-example-notnull.sql

## Adding `UNIQUE` constraints
Adding a unique constraint will force new entries to have different unique value. Primary key is unique as a default.

### Example One
Create a table `Employees` with following columns and data types.<br>
We choose `id` attribute as the table Primary Key.<br>
and let the `first_name` attribute to be unique.

| Name | Data Type | PK | AI | UQ | NN | FK | Ref. FK |
|-|-|-|-|-|-|-|-|
|id|INT(10)|:ballot_box_with_check:|
|first_name|VARCHAR(255)|||:ballot_box_with_check:|
|last_name|VARCHAR(255)|
|salary|INT(10)|

<<< @/code/Create/create-example-unique-one.sql

### Example Two
Create a table `Employees` with following columns and data types.<br>
We choose `id` attribute as the table Primary Key.<br>
and let the `first_name` **and** `last_name` attribute to be unique (as composite unique constraint).

| Name | Data Type | PK | AI | UQ | NN | FK | Ref. FK |
|-|-|-|-|-|-|-|-|
|id|INT(10)|:ballot_box_with_check:|
|first_name|VARCHAR(255)|||:ballot_box_with_check: with `last_name`|
|last_name|VARCHAR(255)|||:ballot_box_with_check: with `first_name`|
|salary|INT(10)|

<<< @/code/Create/create-example-unique-two.sql

### Example Three
Create a table `Employees` with following columns and data types.<br>
We choose `id` attribute as the table Primary Key.<br>
and let the `first_name`, `last_name` attribute to be **individually** unique.

| Name | Data Type | PK | AI | UQ | NN | FK | Ref. FK |
|-|-|-|-|-|-|-|-|
|id|INT(10)|:ballot_box_with_check:|
|first_name|VARCHAR(255)|||:ballot_box_with_check:|
|last_name|VARCHAR(255)|||:ballot_box_with_check:|
|salary|INT(10)|

<<< @/code/Create/create-example-unique-three.sql

::: danger
Composite unique and 2 individual unique are not the same.<br>
Composite unique requires `first_name` **and** `last_name` to be the same to reject the input. As shown in comparison below.

|Input<br>(as `first_name` and `last_name`)|2 Individual Unique Constraint|Composite Unique Constraint|
|-|-|-|
|**Sam** Smith, **Sam** Mercury, Jeff Sam|:x:|:o:|
|**Sam Smith**, **Sam Smith**, Sam Sam|:x:|:x:|
|Jeff **Smith**, Sam Mercury, Tom **Smith**|:x:|:o:|
:::

## Create table from sub-queries
You can use the queries to create new table by using `as` to join the query together.

### Example One
Create a new table `NewEmployees` from the query of `Employees` table.

<<< @/code/Where/where-between-employee.sql

and the code will go as following

<<< @/code/Create/create-example-subquery.sql

::: tip
As you can see, there is no need to set up the constraits. Some constraints are also copied from the reference table
:::
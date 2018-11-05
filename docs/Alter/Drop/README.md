# ALTER - DROP----------------------------------
## Delete column
ALTER TABLE table_name
DROP COLUMN column_name;


## Delete `Primary Key / Foreign Key` constraints
ALTER TABLE lab_location
DROP PRIMARY KEY;

or

ALTER TABLE lab_location
DROP FOREIGN KEY 'lam_emp_fk';

## Delete `UNIQUE` constraints

Unique constraints cannot be removed without the name of the constraints.

ALTER TABLE lab_loction
DROP INDEX loc_name_un;

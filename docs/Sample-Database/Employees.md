# Sample Table - Employees

### Table constraints
| Attribute Name | [Data Type][DT] | [PK][PK]                | [AI][AI] | [UQ][UQ] | [NN][NN]                | [FK][FK] | [Ref. FK][RefFK] |
|----------------|-----------------|-------------------------|----------|----------|-------------------------|----------|------------------|
| employee_id    | FLOAT(6,0)      | :ballot_box_with_check: |          |          |                         |          |                  |
| first_name     | VARCHAR(20)     |                         |          |          | :ballot_box_with_check: |          |                  |
| last_name      | VARCHAR(25)     |                         |          |          | :ballot_box_with_check: |          |                  |
| email          | INT(10)         |                         |          |          |                         |          |                  |
| phone_number   | VARCHAR(20)     |                         |          |          |                         |          |                  |
| hire_date      | DATE            |                         |          |          | :ballot_box_with_check: |          |                  |
| job_id         | VARCHAR(10)     |                         |          |          | :ballot_box_with_check: |          |                  |
| salary         | FLOAT(8,2)      |                         |          |          |                         |          |                  |
| commission_pct | FLOAT(2,2)      |                         |          |          |                         |          |                  |
| manager_id     | FLOAT(6,0)      |                         |          |          |                         |          |                  |
| department_id  | FLOAT(4,0)      |                         |          |          |                         |          |                  |

[DT]: /Overall/DataType/
[PK]: /Overall/Table/#primary-key-pk
[AI]: /Overall/Table/#automatic-incremental-ai
[UQ]: /Overall/Table/#unique-uq-not-null-nn
[NN]: /Overall/Table/#unique-uq-not-null-nn
[FK]: /Overall/Table/#foreign-key-fk
[RefFK]: /Overall/Table/#reference-foreign-key-ref-fk

<<< @/code/Table-Create-Scripts/Employees.sql

### Data Values
or download a [CSV file][CSV]

<<< @/code/Table-Values/Employees.sql

[CSV]: https://raw.githubusercontent.com/Kuma-Cheatsheet/sql/master/code/Table-Values/Employees.csv

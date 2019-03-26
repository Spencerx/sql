# Sample Table - Departments

### Table constraints
| Attribute Name  | [Data Type][DT] | [PK][PK]                | [AI][AI] | [UQ][UQ] | [NN][NN]                | [FK][FK] | [Ref. FK][RefFK] |
|-----------------|-----------------|-------------------------|----------|----------|-------------------------|----------|------------------|
| department_id   | FLOAT(4,0)      | :ballot_box_with_check: |          |          |                         |          |                  |
| department_name | VARCHAR(30)     |                         |          |          | :ballot_box_with_check: |          |                  |
| manager_id      | FLOAT(6,0)      |                         |          |          |                         |          |                  |
| location_id     | FLOAT(4,0)      |                         |          |          |                         |          |                  |

[DT]: /Overall/DataType/
[PK]: /Overall/Table/#primary-key-pk
[AI]: /Overall/Table/#automatic-incremental-ai
[UQ]: /Overall/Table/#unique-uq-not-null-nn
[NN]: /Overall/Table/#unique-uq-not-null-nn
[FK]: /Overall/Table/#foreign-key-fk
[RefFK]: /Overall/Table/#reference-foreign-key-ref-fk

<<< @/code/Table-Create-Scripts/Departments.sql

### Data Values
or download a [CSV file][CSV]

<<< @/code/Table-Values/Departments.sql

[CSV]: https://raw.githubusercontent.com/Kuma-Cheatsheet/sql/master/code/Table-Values/Departments.csv

# Sample Table - Job History

### Table constraints
| Attribute Name | [Data Type][DT] | [PK][PK]                                   | [AI][AI] | [UQ][UQ] | [NN][NN]                | [FK][FK] | [Ref. FK][RefFK] |
|----------------|-----------------|--------------------------------------------|----------|----------|-------------------------|----------|------------------|
| employee_id    | FLOAT(6,0)      | :ballot_box_with_check: with `start_date`  |          |          |                         |          |                  |
| start_date     | DATE            | :ballot_box_with_check: with `employee_id` |          |          |                         |          |                  |
| end_date       | DATE            |                                            |          |          | :ballot_box_with_check: |          |                  |
| job_id         | VARCHAR(10)     |                                            |          |          | :ballot_box_with_check: |          |                  |
| department_id  | FLOAT(4,0)      |                                            |          |          |                         |          |                  |

[DT]: /Overall/DataType/
[PK]: /Overall/Table/#primary-key-pk
[AI]: /Overall/Table/#automatic-incremental-ai
[UQ]: /Overall/Table/#unique-uq-not-null-nn
[NN]: /Overall/Table/#unique-uq-not-null-nn
[FK]: /Overall/Table/#foreign-key-fk
[RefFK]: /Overall/Table/#reference-foreign-key-ref-fk

<<< @/code/Table-Create-Scripts/Job_History.sql

### Data Values
or download a [CSV file][CSV]

<<< @/code/Table-Values/Job_History.sql

[CSV]: https://raw.githubusercontent.com/Kuma-Cheatsheet/sql/master/code/Table-Values/Job_History.csv

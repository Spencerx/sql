# Sample Table - Jobs

### Table constraints
| Attribute Name | [Data Type][DT] | [PK][PK]                | [AI][AI] | [UQ][UQ] | [NN][NN]                | [FK][FK] | [Ref. FK][RefFK] |
|----------------|-----------------|-------------------------|----------|----------|-------------------------|----------|------------------|
| job_id         | VARCHAR(10)     | :ballot_box_with_check: |          |          |                         |          |                  |
| job_title      | VARCHAR(35)     |                         |          |          | :ballot_box_with_check: |          |                  |
| min_salary     | FLOAT(6,0)      |                         |          |          |                         |          |                  |
| max_salary     | FLOAT(6,0)      |                         |          |          |                         |          |                  |

[DT]: /Overall/DataType/
[PK]: /Overall/Table/#primary-key-pk
[AI]: /Overall/Table/#automatic-incremental-ai
[UQ]: /Overall/Table/#unique-uq-not-null-nn
[NN]: /Overall/Table/#unique-uq-not-null-nn
[FK]: /Overall/Table/#foreign-key-fk
[RefFK]: /Overall/Table/#reference-foreign-key-ref-fk

<<< @/code/Table-Create-Scripts/Jobs.sql

### Data Values
or download a [CSV file][CSV]

<<< @/code/Table-Values/Jobs.sql

[CSV]: https://raw.githubusercontent.com/Kuma-Cheatsheet/sql/master/code/Table-Values/Jobs.csv

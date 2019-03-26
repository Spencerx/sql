# Sample Table - Countries

## Table constraints
| Attribute Name | [Data Type][DT] | [PK][PK]                | [AI][AI] | [UQ][UQ] | [NN][NN] | [FK][FK]                | [Ref. FK][RefFK]   |
|----------------|-----------------|-------------------------|----------|----------|----------|-------------------------|--------------------|
| country_id     | VARCHAR(2)      | :ballot_box_with_check: |          |          |          |                         |                    |
| country_name   | VARCHAR(40)     |                         |          |          |          |                         |                    |
| region_id      | INT             |                         |          |          |          | :ballot_box_with_check: | Regions(region_id) |

[DT]: /Overall/DataType/
[PK]: /Overall/Table/#primary-key-pk
[AI]: /Overall/Table/#automatic-incremental-ai
[UQ]: /Overall/Table/#unique-uq-not-null-nn
[NN]: /Overall/Table/#unique-uq-not-null-nn
[FK]: /Overall/Table/#foreign-key-fk
[RefFK]: /Overall/Table/#reference-foreign-key-ref-fk

<<< @/code/Table-Create-Scripts/Countries.sql

## Data Values
or download a [CSV file][CSV]

<<< @/code/Table-Values/Countries.sql

[CSV]: https://raw.githubusercontent.com/Kuma-Cheatsheet/sql/master/code/Table-Values/Countries.csv

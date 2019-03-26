# Sample Table - Regions

### Table constraints
| Attribute Name | [Data Type][DT] | [PK][PK]                | [AI][AI] | [UQ][UQ] | [NN][NN] | [FK][FK] | [Ref. FK][RefFK] |
|----------------|-----------------|-------------------------|----------|----------|----------|----------|------------------|
| region_id      | FLOAT(10,0)     | :ballot_box_with_check: |          |          |          |          |                  |
| region_name    | CHAR(25)        |                         |          |          |          |          |                  |

[DT]: /Overall/DataType/
[PK]: /Overall/Table/#primary-key-pk
[AI]: /Overall/Table/#automatic-incremental-ai
[UQ]: /Overall/Table/#unique-uq-not-null-nn
[NN]: /Overall/Table/#unique-uq-not-null-nn
[FK]: /Overall/Table/#foreign-key-fk
[RefFK]: /Overall/Table/#reference-foreign-key-ref-fk

<<< @/code/Table-Create-Scripts/Regions.sql

### Data Values
or download a [CSV file][CSV]

<<< @/code/Table-Values/Regions.sql

[CSV]: https://raw.githubusercontent.com/Kuma-Cheatsheet/sql/master/code/Table-Values/Regions.csv

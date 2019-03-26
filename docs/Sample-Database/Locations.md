# Sample Table - Locations

### Table constraints
| Attribute Name | [Data Type][DT] | [PK][PK]                | [AI][AI] | [UQ][UQ] | [NN][NN]                | [FK][FK] | [Ref. FK][RefFK] |
|----------------|-----------------|-------------------------|----------|----------|-------------------------|----------|------------------|
| location_id    | FLOAT(4,0)      | :ballot_box_with_check: |          |          |                         |          |                  |
| street_address | VARCHAR(40)     |                         |          |          |                         |          |                  |
| postal_code    | VARCHAR(12)     |                         |          |          |                         |          |                  |
| city           | VARCHAR(30)     |                         |          |          | :ballot_box_with_check: |          |                  |
| state_province | VARCHAR(25)     |                         |          |          |                         |          |                  |
| country_id     | VARCHAR(2)      |                         |          |          |                         |          |                  |

[DT]: /Overall/DataType/
[PK]: /Overall/Table/#primary-key-pk
[AI]: /Overall/Table/#automatic-incremental-ai
[UQ]: /Overall/Table/#unique-uq-not-null-nn
[NN]: /Overall/Table/#unique-uq-not-null-nn
[FK]: /Overall/Table/#foreign-key-fk
[RefFK]: /Overall/Table/#reference-foreign-key-ref-fk

<<< @/code/Table-Create-Scripts/Locations.sql

### Data Values
or download a [CSV file][CSV]

<<< @/code/Table-Values/Locations.sql

[CSV]: https://raw.githubusercontent.com/Kuma-Cheatsheet/sql/master/code/Table-Values/Locations.csv

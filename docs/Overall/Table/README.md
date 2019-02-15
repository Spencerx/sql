# Table Definitions
**PK** : Primary Key (automatically Not Null & Unique)
**AI** : Automatic Incremental 
**UQ** : Unique
**NN** : Not Null
**FK** : Foreign Key
**Ref. FK** : Column & Table that Foreign Key relates to

### Primary Key
Attribute that can represents the row. It **must be unique** from all rows and they **cannot be null** (for reference issue)

Primary Key *should* have these properties
- Short
- Number
- Simple
- Never change

### Surrogate Key (Replacement Key)
Attribute that **is created only** to be a Primary Key.<br>
Use `AI` for easier key management.

Mostly a system-generated key and have a property of Primary Key

### Automatic Incremental
For use with Primary Key.<br>
Will create new value of primary key (for example 1, 2, 3, 4) to make Primary Key remains Unique and Not Null

### Unique + Not Null
It explains itself.

Unique column means that cell in that column cannot have duplicate value

Not Null column means that cell in that column cannot be Null value

### Foreign Key
When 
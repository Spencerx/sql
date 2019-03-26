# Second Normal Form (2 NF)

## Rule
[Non-key attribute][Non-key Attribute] must [fully dependent][Full Dependency] to the Primary Key and satisfies [1st Normal Form][1st Normal Form]

[Non-key Attribute]: example.com
[Full Dependency]: example.com
[1st Normal Form]: https://kuma-cheatsheet.github.io/sql/Normalization/1NF.html#first-normal-form-1-nf
[Create new Table]: example.com

## How to fix
- [Create new table][Create new Table]



## Example One : Create new table
| Title (PK) | Author | Author Nationality | Format (PK) | Price |
|-------|--------|--------------------|--------|-------|
|Beginning MySQL Database Design and Optimization|Chad Russell|American|Hardcover|49.99|
|Beginning MySQL Database Design and Optimization|Chad Russell|American|Paperwhite|29.99|

In this table, this is the [dependency relations][Dependency Relations]

[Dependency Relations]: example.com

Title, Format -> Author, Author Nationality, Price<br>
**Title -> Author**<br>
Author -> Author Nationality (we will work on this later)

-----
#### Reference
- [https://en.wikipedia.org/wiki/Database_normalization#Satisfying_2NF][Ref1]
- [https://www.1keydata.com/database-normalization/second-normal-form-2nf.php][Ref2]

[Ref1]: https://en.wikipedia.org/wiki/Database_normalization#Satisfying_2NF
[Ref2]: https://www.1keydata.com/database-normalization/second-normal-form-2nf.php
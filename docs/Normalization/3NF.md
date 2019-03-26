# Third Normal Form (3 NF)

## Rule
[Non-key attribute][Non-key Attribute] must have no [Transitive Dependency][Transitive Dependency] and satisfies [2nd Normal Form][2nd Normal Form]

[Non-key Attribute]: example.com
[Transitive Dependency]: example.com
[2nd Normal Form]: https://kuma-cheatsheet.github.io/sql/Normalization/2NF.html#first-normal-form-1-nf
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
**Author -> Author Nationality**

-----
#### Reference
- [https://en.wikipedia.org/wiki/Database_normalization#Satisfying_3NF][Ref1]
- [https://www.1keydata.com/database-normalization/third-normal-form-3nf.php][Ref2]

[Ref1]: https://en.wikipedia.org/wiki/Database_normalization#Satisfying_3NF
[Ref2]: https://www.1keydata.com/database-normalization/third-normal-form-3nf.php
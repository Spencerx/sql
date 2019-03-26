# Third Normal Form (3 NF)

## Rule
[Non-key attribute][Non-key Attribute] must have no [Transitive Dependency][Transitive Dependency] and satisfies [2nd Normal Form][2nd Normal Form]

## How to fix
- [Create new table][Create new Table]

[Create new table]: #example-one-create-new-table

## Example One : Create new table
| Title (PK) | Author | Author Nationality | Format (PK) | Price |
|-------|--------|--------------------|--------|-------|
|Beginning MySQL Database Design and Optimization|Chad Russell|American|Hardcover|49.99|
|Beginning MySQL Database Design and Optimization|Chad Russell|American|Paperwhite|29.99|

::: tip
This is the [Dependency Relations][Dependency Relations] of the table above.

Title, Format -> Author, Author Nationality, Price<br>
**Author -> Author Nationality**
:::

-----

#### Reference
- [https://en.wikipedia.org/wiki/Database_normalization#Satisfying_3NF][Ref1]
- [https://www.1keydata.com/database-normalization/third-normal-form-3nf.php][Ref2]

[Ref1]: https://en.wikipedia.org/wiki/Database_normalization#Satisfying_3NF
[Ref2]: https://www.1keydata.com/database-normalization/third-normal-form-3nf.php

[Surrogate Key]: /Overall/Table/#surrogate-key
[Composite Key]: /Overall/Table/#composite-key
[JOIN]: /Join/Outer/Full/
[Full Dependency]: /Normalization/Introduction.html#full-dependency
[Partial Dependency]: /Normalization/Introduction.html#partial-dependency
[Transitive Dependency]: /Normalization/Introduction.html#transitive-dependency
[Dependency Relations]: /Normalization/Introduction.html#dependency
[Non-key Attribute]: https://example.com
[1st Normal Form]: /Normalization/1NF.html
[2nd Normal Form]: /Normalization/2NF.html
[3rd Normal Form]: /Normalization/3NF.html
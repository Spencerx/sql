# Second Normal Form (2 NF)

## Rule
[Non-key attribute][Non-key Attribute] must [fully dependent][Full Dependency] to the Primary Key and satisfies [1st Normal Form][1st Normal Form]


## How to fix
- [Create new table][Create new Table]

[Create new Table]: example.com

## Example One : Create new table
| Title (PK)                             | Author       | Author Nationality | Format (PK) | Price |
|----------------------------------------|--------------|--------------------|-------------|-------|
| MySQL Database Design and Optimization | Chad Russell | American           | Hardcover   | 49.99 |
| MySQL Database Design and Optimization | Chad Russell | American           | Paperwhite  | 29.99 |

::: tip
This is the [Dependency Relations][Dependency Relations] of the table above.

Title, Format -> Author, Author Nationality, Price<br>
**Title -> Author**<br>
Author -> Author Nationality (we will work on this later)
:::

In which the `Title -> Author` is a [partial dependency][Partial Dependency] and does not satisfies the 2nd Normal Form.<br>
So we have to change the table to as following

#### Table Book
| Title (PK)                             | Author Nationality | Format (PK) | Price |
|----------------------------------------|--------------------|-------------|-------|
| MySQL Database Design and Optimization | American           | Hardcover   | 49.99 |
| MySQL Database Design and Optimization | American           | Paperwhite  | 29.99 |

#### Table Author
| Title (PK)  (FK(Book))                 | Author       |
|----------------------------------------|--------------|
| MySQL Database Design and Optimization | Chad Russell |

Now the Author table can find a book using [JOIN][JOIN] because it has a Foreign Key of Book (which is Title).

But Author Nationality is depends on Author (as a [Transitive Dependency][Transitive Dependency]), so we have to move it to the same table, as following

#### Table Book
| Title (PK)                             | Format (PK) | Price |
|----------------------------------------|-------------|-------|
| MySQL Database Design and Optimization | Hardcover   | 49.99 |
| MySQL Database Design and Optimization | Paperwhite  | 29.99 |

#### Table Author
| Title (PK)  (FK(Book))                 | Author       | Author Nationality |
|----------------------------------------|--------------|--------------------|
| MySQL Database Design and Optimization | Chad Russell | American           |

so, if we liked to change the Author Nationality, you can edit it in the Author Table. And you can convert back using [JOIN function][JOIN] on SQL.

now the table satisfies the 2nd Normal Form and the [3rd Normal Form][3rd Normal Form] altogether


-----
#### Reference
- [https://en.wikipedia.org/wiki/Database_normalization#Satisfying_2NF][Ref1]
- [https://www.1keydata.com/database-normalization/second-normal-form-2nf.php][Ref2]


[Ref1]: https://en.wikipedia.org/wiki/Database_normalization#Satisfying_2NF
[Ref2]: https://www.1keydata.com/database-normalization/second-normal-form-2nf.php

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
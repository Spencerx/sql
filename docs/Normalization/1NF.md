# First Normal Form (1 NF)

## Rule
Make the database have atomicity (in ACID properties) for better transaction, by make sure that subject to **don't have set of values**.

## How to fix
::: tip Notice
Each of the fix for the first normal form have different consequence on database design and could also creates more issues onto the database.
:::

- [Seperate duplicates into multiple column][Separate column]
- [Add another record][Add record]

[Separate column]: #example-one-seperate-duplicates-into-multiple-column
[Add record]: #example-two-add-another-record

## Example One : Seperate duplicates into multiple column
| Title (PK)                                       | Author       | Author Nationality | Format    | Subject               |
|--------------------------------------------------|--------------|--------------------|-----------|-----------------------|
| Beginning MySQL Database Design and Optimization | Chad Russell | American           | Hardcover | MySQL,Database,Design |

This table have multiple values in subject.<br>
This violates the atomicity of the database, which we can add more columns (attributes) to the database as following

| Title (PK)                                       | Author       | Author Nationality | Format    | Subject 1 | Subject 2 | Subject 3 |
|--------------------------------------------------|--------------|--------------------|-----------|-----------|-----------|-----------|
| Beginning MySQL Database Design and Optimization | Chad Russell | American           | Hardcover | MySQL     | Database  | Design    |

but this method can introduces more problem, **if the row (record) have different amount of subject** as following

| Title (PK)                                       | Author       | Author Nationality | Format    | Subject               |
|--------------------------------------------------|--------------|--------------------|-----------|-----------------------|
| Beginning MySQL Database Design and Optimization | Chad Russell | American           | Hardcover | MySQL,Database,Design |
| Think Python                                     | Steve Bowell | American           | Hardcover | Python,Tutorial       |

The second record have only 2 Subject.<br>
If we do the same method, this give the table as following

| Title (PK)                                       | Author       | Author Nationality | Format    | Subject 1 | Subject 2 | Subject 3 |
|--------------------------------------------------|--------------|--------------------|-----------|-----------|-----------|-----------|
| Beginning MySQL Database Design and Optimization | Chad Russell | American           | Hardcover | MySQL     | Database  | Design    |
| Think Python                                     | Steve Bowell | American           | Hardcover | Python    | Tutorial  | **Null**  |

This introduces [**Null Value**][Null Value] to the table, which may cause more problem when you have to use SQL arguments keyword on. (eg. WHERE, HAVING)

## Example Two : Add another record
| Title (PK)                                       | Author       | Author Nationality | Format                | Price        |
|--------------------------------------------------|--------------|--------------------|-----------------------|--------------|
| Beginning MySQL Database Design and Optimization | Chad Russell | American           | Hardcover, Paperwhite | 49.99, 29.99 |

This table have 2 different version of book and different price. (49.99 for hard cover and 29.99 for paperwhite) This violates atomicity of the database, which we have to fix it to 

| Title (PK)                                       | Author       | Author Nationality | Format     | Price |
|--------------------------------------------------|--------------|--------------------|------------|-------|
| Beginning MySQL Database Design and Optimization | Chad Russell | American           | Hardcover  | 49.99 |
| Beginning MySQL Database Design and Optimization | Chad Russell | American           | Paperwhite | 29.99 |

but this also introduces the problem where the first and second row (record) have the same Primary Key, which violates the Primary Key integrity.<br>
So the fix is to create [Surrogate Key][Surrogate Key] to this table as following. 

| ID (PK) | Title                                            | Author       | Author Nationality | Format     | Price |
|---------|--------------------------------------------------|--------------|--------------------|------------|-------|
| 1       | Beginning MySQL Database Design and Optimization | Chad Russell | American           | Hardcover  | 49.99 |
| 2       | Beginning MySQL Database Design and Optimization | Chad Russell | American           | Paperwhite | 29.99 |

or use [Composite Key][Composite Key] by letting Title and Format to be a Key. 

| Title (PK)                                       | Author       | Author Nationality | Format (PK) | Price |
|--------------------------------------------------|--------------|--------------------|-------------|-------|
| Beginning MySQL Database Design and Optimization | Chad Russell | American           | Hardcover   | 49.99 |
| Beginning MySQL Database Design and Optimization | Chad Russell | American           | Paperwhite  | 29.99 |

-----
#### Citations + Reference
- [https://en.wikipedia.org/wiki/Database_normalization#Satisfying_1NF](https://en.wikipedia.org/wiki/Database_normalization#Satisfying_1NF)

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
# Lists of SQL Data Type

::: warning
Each SQL language have different data types. Some have more, some have less.<br>
Make sure you read the documentation first<br>
:::

## Basic Data Type
|Data type|Description|
|-|-|
|**CHAR**<br>`CHAR(size)`|Holds a **fixed length string**.<br>The fixed size is specified in parenthesis.<br>Can store up to 255 characters
|**VARCHAR**<br>`VARCHAR(size)`|Holds a **variable length string**.<br>The maximum size is specified in parenthesis.<br>Can store up to 255 characters.|
|**TEXT**<br>`TEXT`|Holds a string with a maximum length of 65,535 characters|
|**ENUM**<br>`ENUM(x,y,z,etc.)`|Let you enter a list of possible values.<br>You can list up to 65,535 values in an ENUM list.<br>If a value is inserted that is not in the list, a blank value will be inserted.|

Note: The values are sorted in the order you enter them.

## MySQL Data Type
|Data type|Description|
|-|-|
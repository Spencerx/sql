<<<<<<< HEAD
# SQL List
This is a MySQL syntax. Some syntax is valid or have multiple alias.

## เลือกข้อมูลบนตาราง
|                                                       |                                                                                                |
|-------------------------------------------------------|------------------------------------------------------------------------------------------------|
| **SELECT**<br>`SELECT [column_name]`<br>              | **Required command**<br>`FROM`<br><br>**Optional Modifier**<br>`SELECT DISTINCT [column_name]` |
| **FROM**<br>`FROM [table_name]`                       | **Required command**<br>`SELECT`                                                               |
| **WHERE**<br>`WHERE [arguments]`                      | **Required command**<br>`SELECT` & `FROM`                                                      |
| **ORDER BY**<br>`ORDER BY [column_name] [ASC / DESC]` | **Required command**<br>`SELECT` & `FROM`                                                      |

## Data Manipulation Language (DML)<br>**เพื่ม ลบตาราง + แก้ไข column**
|                                                         |                                                                                     |
|---------------------------------------------------------|-------------------------------------------------------------------------------------|
| **CREATE** - สร้างตาราง<br>`CREATE TABLE [table_name]`   |                                                                                     |
| **ALTER** - แก้ไขข้อมูลตาราง<br>`ALTER TABLE [table_name]` | **Required Modifier**<br>`[ADD / MODIFY / DROP] [column_name] [column_constraints]` |
| **DROP** - ลบตารางออก<br>`DROP TABLE [table_name]`      |                                                                                     |
## จับกลุ่ม
|                                       |   |
|---------------------------------------|---|
| **GROUP**<br>`GROUP BY [column_name]` |   |
| **HAVING**<br>`HAVING [arguments]`    |   |

## เพื่ม ลบ แก้ row ตาราง
|                                          |                                                                          |
|------------------------------------------|--------------------------------------------------------------------------|
| **INSERT**<br>`INSERT INTO [table_name]` | **Required command**<br>`VALUES [value_list]`                            |
| **UPDATE**<br>`UPDATE [table_name]`      | **Required command**<br>`SET [column_name] = [argument] WHERE[argument]` |
| **DELETE**<br>`DELETE FROM [table_name]  | **Required command**<br>`WHERE [arguments]                               |

## รวมตาราง
|                                                                        |                                                                                            |
|------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| **NATURAL JOIN**<br>`NATURAL JOIN [table_name]`                        | **Required command**<br>`FROM`                                                             |
| **INNER JOIN**<br>`INNER JOIN [table_name]` or <br>`JOIN [table_name]` | **Required modifier**<br>`USING [common_key_name]` or `ON [table1_key] = [table2_key]`     |
| **OUTER JOIN**<br>`[LEFT / RIGHT / FULL] OUTER JOIN [table_name]`      | **Required modifier**<br>`USING [common_key_name]` or <br>`ON [table1_key] = [table2_key]` |

## จัดการตารางโดยรวม 
|                                                                 |   |
|-----------------------------------------------------------------|---|
| **RENAME**<br>`RENAME [table_name] [new_table_name]`            |   |
| **SET INTEGRITY**<br>`SET FOREIGN_KEY_CHECKS =  [true / false]` |   |

## Transaction Control
|                                                   |   |
|---------------------------------------------------|---|
| **COMMIT**<br>`COMMIT`                            |   |
| **ROLLBACK**<br>`ROLLBACK [checkpoint_name]`      |   |
| **SAVEPOINT**<br>`SAVEPOINT [new_savepoint_name]` |   |
=======
# Welcome to core
This is the core of all cheatsheet.

If you would like to contribute and distrobute it through all cheatsheet, please make sure you are following the `CONTRIBUTE.md` guidelines. We will be updating it constantly.

This vuepress is working on version 0.14.4 and we are ready to move up to 1.0 very soon.
>>>>>>> fce3de360c3bcfac3626a9a50797821c64e6ba85

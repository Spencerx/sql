# GROUP
การทำ GROUP คือจะเลือกข้อมูลเดียวที่มี Attribute เหมือนกัน และอาจจะนำไปใช้งานทีหลัง

โดยข้อมูลที่เอาจะเป็นข้อมูลแรกที่มี Attribute แตกต่าง

<<< @/code/Group/group-by-salary.sql

โดย GROUP BY จะเลือก column แบบ table_name.attribute ไม่ได้
ต้องใช้ชื่อ attribute เลย

โดยการใช้ HAVING แล้ว ก็จะสามารถคำนวณ Row Function จาก Attribute ในกลุ่มได้

## Example One

<<< @/code/Group/group-by-salary.sql

## HAVING
`HAVING` ทำหน้าที่เหมือน `WHERE` แต่อันนี้คือจะเอาไว้เลือกกลุ่ม ที่มี condition ตามที่ `HAVING` ได้บอกเอาไว้

<<< @/code/Group/having-usage.sql

<<< @/code/Group/having-salary.sql

CREATE TABLE Departments (
    department_id       FLOAT(4,0),
    department_name     VARCHAR(30) NOT NULL,
    manager_id          FLOAT(6,0),
    location_id         FLOAT(4,0)
);

ALTER TABLE Departments
    ADD CONSTRAINT departments_pkey 
    PRIMARY KEY (department_id);

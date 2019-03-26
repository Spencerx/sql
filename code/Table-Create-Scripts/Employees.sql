CREATE TABLE Employees (
    employee_id     FLOAT(6,0),
    first_name      VARCHAR(20),
    last_name       VARCHAR(25) NOT NULL,
    email           VARCHAR(25) NOT NULL,
    phone_number    VARCHAR(20),
    hire_date       DATE        NOT NULL,
    job_id          VARCHAR(10) NOT NULL,
    salary          FLOAT(8,2),
    commission_pct  FLOAT(2,2),
    manager_id      FLOAT(6,0),
    department_id   FLOAT(4,0)
);

ALTER TABLE Employees
    ADD CONSTRAINT employees_pkey 
    PRIMARY KEY (employee_id);

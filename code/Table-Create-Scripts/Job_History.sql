CREATE TABLE Job_history (
    employee_id     FLOAT(6,0)  NOT NULL,
    start_date      DATE        NOT NULL,
    end_date        DATE        NOT NULL,
    job_id          VARCHAR(10) NOT NULL,
    department_id   FLOAT(4,0)
);

ALTER TABLE Job_history
    ADD CONSTRAINT job_history_pkey 
    PRIMARY KEY (employee_id, start_date);

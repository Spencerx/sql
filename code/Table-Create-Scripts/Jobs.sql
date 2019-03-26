CREATE TABLE Jobs (
    job_id      VARCHAR(10),
    job_title   VARCHAR(35)     NOT NULL,
    min_salary  FLOAT(6,0),
    max_salary  FLOAT(6,0)
);

ALTER TABLE Jobs
    ADD CONSTRAINT jobs_pkey 
    PRIMARY KEY (job_id);

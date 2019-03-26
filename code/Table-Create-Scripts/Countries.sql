CREATE TABLE Countries (
    country_id      VARCHAR(2),
    country_name    VARCHAR(40),
    region_id       INT
);

ALTER TABLE Countries
    ADD CONSTRAINT countries_pkey 
        PRIMARY KEY (country_id);

ALTER TABLE Countries
    ADD CONSTRAINT countries_region_id_fkey 
        FOREIGN KEY (region_id) 
        REFERENCES Regions(region_id);

CREATE TABLE Regions (
    region_id   FLOAT(10,0) NOT NULL,
    region_name CHAR(25)
);

ALTER TABLE Regions
    ADD CONSTRAINT regions_pkey PRIMARY KEY (region_id);

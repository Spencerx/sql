CREATE TABLE Locations (
    location_id     FLOAT(4,0)      NOT NULL,
    street_address  VARCHAR(40),
    postal_code     VARCHAR(12),
    city            VARCHAR(30)     NOT NULL,
    state_province  VARCHAR(25),
    country_id      VARCHAR(2)
);

ALTER TABLE Locations
    ADD CONSTRAINT locations_pkey 
    PRIMARY KEY (location_id);

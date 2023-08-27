-- Commands to use for creating pg databse
CREATE DATABASE apptracker;

CREATE TABLE applications(
  app_id SERIAL PRIMARY KEY,
  company VARCHAR(255)
);
--create database
CREATE DATABASE work_app;

--connect to database
\c work_app;

--create USERS table
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  age INTEGER NOT NULL,
  gender VARCHAR(6) NOT NULL,
  job_type VARCHAR(2) NOT NULL
);

--create EMPLOYER table
CREATE TABLE employers (
  employer_id VARCHAR(2) NOT NULL,
  employer VARCHAR(50) NOT NULL
);

--input values into users
INSERT INTO users (name, age, gender, job_type) VALUES
  ('Alice', 12, 'f', 'st'),
  ('Bob', 21, 'f', 'dv'),
  ('Clarice', 56, 'f', 'dv'),
  ('David', 9, 'm', 'na'),
  ('Eric', 61, 'm', 'dv'),
  ('Fred', 45, 'm', 'dv'),
  ('George', 38, 'm', 'dv'),
  ('Hannah', 15, 'f', 'na'),
  ('Ilona', 17, 'f', 'st'),
  ('Jake', 27, 'm', 'dv'),
  ('Kathy', 8, 'f', 'na'),
  ('Liam', 20, 'm', 'st');

--insert values into employers
INSERT INTO employers (employer_id, employer) VALUES
  ('dv', 'DevLeague'),
  ('st', 'Student'),
  ('na', 'N/A');

--Select by id
SELECT *
FROM users
WHERE id = 5;

--Select youngest
SELECT *
FROM users
ORDER BY age ASC
LIMIT 1;

--Select oldest
SELECT *
FROM users
ORDER BY age DESC
LIMIT 1;

--Select males
SELECT *
FROM users
WHERE gender = 'm';

--Select females
SELECT *
FROM users
WHERE gender = 'f';

--Select employees
SELECT *
FROM users
WHERE job_type = 'dv';

--group employees
SELECT *
FROM users
ORDER BY job_type, name ASC;




--resets to me
\c colinsygiel

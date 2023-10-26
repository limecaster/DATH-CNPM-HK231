CREATE DATABASE library;
USE library;
CREATE TABLE Book(
    ISBN VARCHAR(13),
    title VARCHAR(30) NOT NULL,
    description TEXT,
    PRIMARY KEY (ISBN),
);
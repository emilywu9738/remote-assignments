CREATE DATABASE assignment;
USE assignment;

CREATE TABLE user(
    id integer PRIMARY KEY AUTO_INCREMENT,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO user (email, password)
VALUES
('jerry@gmail.com', '123456'),
('ian@gmail.com', '654321');

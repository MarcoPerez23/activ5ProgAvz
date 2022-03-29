CREATE DATABASE prograAvanzada;

USE prograAvanzada;

CREATE TABLE Usuarios (
        id int NOT NULL AUTO_INCREMENT, 
        nombre varchar(255) NOT NULL UNIQUE,
        pass varchar(255) NOT NULL,
        PRIMARY KEY(id)
);

CREATE TABLE Jokes (
        id int NOT NULL AUTO_INCREMENT, 
        category varchar(255) NOT NULL,
        joke varchar(255) NOT NULL,
        PRIMARY KEY(id)
);

create user "tester"@"localhost" identified BY "tester";
GRANT ALL ON prograAvanzada.* TO 'tester'@'localhost';

SELECT * FROM Jokes;
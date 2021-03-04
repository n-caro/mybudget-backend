-- Create tables
-- Users
CREATE TABLE IF NOT EXISTS Users (
    id int AUTO_INCREMENT,
    email VARCHAR(70) NOT NULL UNIQUE,
    name varchar(60) NOT NULL,
    password varchar(60) not null,
    PRIMARY KEY (id)
);
-- Types
CREATE TABLE IF NOT EXISTS Types (
	id int AUTO_INCREMENT,
    type varchar(40) NOT NULL,
    PRIMARY KEY(id)
);
-- Categories 
CREATE TABLE IF NOT EXISTS Categories (
	id int AUTO_INCREMENT,
    name varchar(40) NOT NULL,
    typeId int not null,
    PRIMARY KEY(id),
    FOREIGN KEY (typeId) REFERENCES Types(id)
);
-- Operations
CREATE TABLE IF NOT EXISTS Operations(
    id int AUTO_INCREMENT,
    amount DECIMAL(10,2) not null,
    dateOperation DATETIME not null,
    updatedAt DATETIME,
    note varchar(140) NOT NULL,
    categoryId int not null,
    typeId int not null,
    userId int not null,
    PRIMARY KEY (id),
    FOREIGN KEY (typeId) REFERENCES Types(id),
    FOREIGN KEY (categoryId) REFERENCES Categories(id),
    FOREIGN KEY (userId) REFERENCES Users(id)
);

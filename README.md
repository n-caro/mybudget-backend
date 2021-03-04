# mybudget-api 

## Overview
A personal budget management 💸 REST API built in Nodejs, Express, Sequelize. AlkemyLabs JS Challenge resolution.

This is the backend (server side) of the myBudget app. To see the frontend (client side) visit the repository: [github.com/n-caro/mybudget-frontend](https://github.com/n-caro/mybudget-frontend)

![baboon with money 😆](https://media.giphy.com/media/aXThX9ftrHnji/giphy-downsized.gif)

## Table of contents
- [mybudget-api](#mybudget-api)
  * [Overview](#overview)
  * [Table of contents](#table-of-contents)
  * [1. About API](#1-about-api)
    + [Database model](#database-model)
  * [2. Install and usage](#2-install-and-usage)
      - [Preparing the database](#preparing-the-database)
      - [Install dependencies](#install-dependencies)
      - [Setting environment variables](#setting-environment-variables)
      - [Usage](#usage)
  * [3. Screenshots](#3-screenshots)

## 1. About API

* API RESTFul level 2, node.js (express)
* N-Layer architecture
  * routes
  * controllers
  * services
  * repositories
* SQL Database, with Sequelize ORM
* Authentication: JWT (Json Web Token) and bcrypt for password encryption.
* Dependency injection: (awilix)
* Docs: Swagger

### Database model

![diagram database](docs/resources/mybudget-dbdiagram.png)

## 2. Install and usage

#### Preparing the database
You must create a database and import/run the SQL scripts from folder [/database](/database). In the following order
1.  [**mybugdetDB-DDL.sql**](/database/mybudgetDB-DDL.sql) : script for database structure creation (Data Definition Language) 
2. [**mybugdetDB-DML.sql**](/database/mybudgetDB-DML.sql) : script to add data: types of operations and categories (Data Manipulation Language)

Example with mysql command-line client:

```shell
mysql -u username -p myBudgetDB < mybudgetDB-DDL.sql
mysql -u username -p myBudgetDB < mybudgetDB-DML.sql
```
####  Install dependencies
```shell
npm install
```

#### Setting environment variables
Create a `.env` file into the root folder. You can edit the `.env.example` file and rename it. 

**.env**

```
APPLICATION_NAME = mybudget-api
DB_CONNECTIONURI=mysql://user:password@localhost:3306/mybudgetDB
JWT_SECRET = 'jwt_secret_key'
JWT_EXPIRATIONTIME = 24h
PORT = 4000
```
####  Usage
Run script:
```shell
npm start
```
165 / 5000
Resultados de traducción
After seeing the message that the application is running, you can see the documentation and use the endpoints from swagger. `http://localhost:/{PORT}/api-docs` (example: http://localhost:4000/api-docs)


## 3. Screenshots

![swagger documentation with all endpoints](docs/resources/mybudget-screenshot-swagger.png)


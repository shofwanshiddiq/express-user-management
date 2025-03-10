# User Management API Using Express + Node.JS

This is a simple user management RESTful API built using Node.js, Express, and Knex for database connection. The API provides endpoints to manage users, allowing you to add and retrieve user data.

---

## Features

- Create a new user with hashed password.
- Login with JWT Authentication.
- Update and Delete user.
- Retrieve a list of all users.
- Uses Knex.js for database connection and query building.

---

## Technologies

![Node.js](https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white)
![Knex.js](https://img.shields.io/badge/knex.js-%23000000.svg?style=for-the-badge&logo=knex&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%234479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

---

## API Endpoints Documentation

| Method     | API Endpoint               | Description                                      |
|------------|----------------------------|--------------------------------------------------|
| **POST**   | `/api/v1/users`            | Create a new user                                |
| **GET**    | `/api/v1/users`            | Get a list of all users                          |
| **DELETE**    | `/api/v1/users/:id`            | Delete user                         |
| **GET**    | `/api/v1/users/:id`            | Get specific user                        |
| **POST**    | `/api/v1/users/login`            | Login with email and password                        |

---

## Database Structure

The API uses a `users` table to store user data. Below is the schema for the `users` table:

```sql
/*CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INT CHECK (age >= 0), 
    user_email VARCHAR(100) UNIQUE NOT NULL,
    hashed_password VARCHAR (100)
);*/
```

## Security Layer

### Input 
* Middleware for JWT Authentication
* Hashed Password using bcrpyt 
* Role Authorization for specific endpoint
* Content Type Validation 

### Output Header
* X-Frame Options Deny: prevents the page from being displayed in an iframe
* X-Content-Type-Options: nosniff: prevent MIME type sniffing attacks
* Content Security Policy: prevent loading from external resources, and only allows script, styles, and images only form the same origin
* Remove X-Powered By

## Getting Started

Follow these steps to set up and run the API locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MySQL](https://dev.mysql.com/downloads/) (or any other database supported by Knex)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/shofwanshiddiq/express-user-management.git
   cd your-repo-name
   ```

2. Install Dependencies
   ```bash
   npm install 
   npm install express
   npm install knex --save
   npm install mysql2
   npm install jsonwebtoken
   npm install dotenv
   npm install bcrypt
   npm install helmet
   ```
3. Start the Server
   ```bash
   npm start
   ```
4. Testing Using Postman
   https://github.com/shofwanshiddiq/express-user-management/blob/main/Express_UserManagement_Testing.json



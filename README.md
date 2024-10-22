# Personal Expense Tracker API

## Setup

1. Clone the repository
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file with the following:
    ```
    MONGO_URI=mongodb://localhost:27017/expense-tracker
    PORT=5000
    ```
4. Start the server:
    ```bash
    npm start
    ```

## API Endpoints

### Transactions
- `POST /api/transactions`: Add a new transaction.
- `GET /api/transactions`: Get all transactions.
- `GET /api/transactions/:id`: Get a transaction by ID.
- `PUT /api/transactions/:id`: Update a transaction by ID.
- `DELETE /api/transactions/:id`: Delete a transaction by ID.
- `GET /api/transactions/summary`: Get summary (total income, expense, and balance).

### Categories
- `POST /api/categories`: Add a new category.
- `GET /api/categories`: Get all categories.

API Testing Steps Using Postman

1. User Registration
https://tracker-expense-cyfn.onrender.com/api/auth/register
Endpoint: POST /api/auth/register
Description: Register a new user.
Request Body:
json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

Expected Response:
json
{
  "_id": "60e67c91664b8b001c3c3c12",
  "name": "John Doe",
  "email": "john@example.com",
  "token": "<JWT token>"
}

2. User Login
https://tracker-expense-cyfn.onrender.com/api/auth/login
Endpoint: POST /api/auth/login
Description: Login a user.
Request Body:
json
{
  "email": "john@example.com",
  "password": "password123"
}

Expected Response:
json
{
  "_id": "60e67c91664b8b001c3c3c12",
  "name": "John Doe",
  "email": "john@example.com",
  "token": "<JWT token>"
}
Note: Copy the token value. You will use this token for authorization in the next requests.

4. Add a New Transaction
https://tracker-expense-cyfn.onrender.com/api/transactions
Endpoint: POST /api/transactions
Description: Add a new transaction for the authenticated user.
Authorization: Select "Bearer Token" in Postman and paste the token from the login response.
Request Body:
json
{
  "type": "income",
  "category": "Salary",
  "amount": 3000,
  "date": "2024-10-22",
  "description": "Monthly salary"
}

Expected Response:
json
{
  "_id": "60e68099f8d4b9002fbf00e9",
  "user": "60e67c91664b8b001c3c3c12",
  "type": "income",
  "category": "Salary",
  "amount": 3000,
  "date": "2024-10-22T00:00:00.000Z",
  "description": "Monthly salary",
  "__v": 0
}

4. Get All Transactions
https://tracker-expense-cyfn.onrender.com/api/transactions
Endpoint: GET /api/transactions
Description: Retrieve all transactions for the authenticated user.
Authorization: Select "Bearer Token" and use the token from the login response.
Expected Response:
json
[
  {
    "_id": "60e68099f8d4b9002fbf00e9",
    "user": "60e67c91664b8b001c3c3c12",
    "type": "income",
    "category": "Salary",
    "amount": 3000,
    "date": "2024-10-22T00:00:00.000Z",
    "description": "Monthly salary",
    "__v": 0
  }
]

6. Get Transaction by ID
https://tracker-expense-cyfn.onrender.com/api/transactions/:id
Endpoint: GET /api/transactions/:id
Description: Retrieve a transaction by its ID.
Authorization: Select "Bearer Token" and use the token from the login response.
URL: http://localhost:5000/api/transactions/60e68099f8d4b9002fbf00e9
Expected Response:
json
{
  "_id": "60e68099f8d4b9002fbf00e9",
  "user": "60e67c91664b8b001c3c3c12",
  "type": "income",
  "category": "Salary",
  "amount": 3000,
  "date": "2024-10-22T00:00:00.000Z",
  "description": "Monthly salary",
  "__v": 0
}

8. Update Transaction by ID
https://tracker-expense-cyfn.onrender.com/api/transactions/:id
Endpoint: PUT /api/transactions/:id
Description: Update a specific transaction.
Authorization: Select "Bearer Token" and use the token from the login response.
URL: http://localhost:5000/api/transactions/60e68099f8d4b9002fbf00e9
Request Body:
json
{
  "type": "income",
  "category": "Freelance",
  "amount": 3500,
  "date": "2024-10-22",
  "description": "Freelance payment"
}
Expected Response:
json

{
  "_id": "60e68099f8d4b9002fbf00e9",
  "user": "60e67c91664b8b001c3c3c12",
  "type": "income",
  "category": "Freelance",
  "amount": 3500,
  "date": "2024-10-22T00:00:00.000Z",
  "description": "Freelance payment",
  "__v": 0
}

7. Delete Transaction by ID
https://tracker-expense-cyfn.onrender.com/transactions/:id
Endpoint: DELETE /api/transactions/:id
Description: Delete a specific transaction.
Authorization: Select "Bearer Token" and use the token from the login response.
URL: http://localhost:5000/api/transactions/60e68099f8d4b9002fbf00e9
Expected Response:
json
{
  "message": "Transaction removed"
}

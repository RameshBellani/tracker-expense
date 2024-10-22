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

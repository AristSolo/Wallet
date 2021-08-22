# Wallet
A Money Tracker for users with multiple businesses/sources of income 

# Project Setup
Ensure Node.js and mysql are installed

# Running the environment
Ensure you are on the project`s root folder
On terminal, run npm i to install node modules

# Database setup
On the config folder, open the config.json
Configure your database credential preferences

## Run "npm sequelize db:create"
It creates the database

## Run "npm sequelize db:migrate"
It runs the migration files that create db tables and relations

# Running the app
## Ensure your mysql server is running
## Run "npm run server" to launch
# Available APIs
## /users/register
POST request for user registration
## /wallet/register
POST request for wallet registration
## /business/register
POST request for business registration
## /wallet/update
PATCH request for updating expenses and income
## /wallet/transactions/:userId
GET request for getting a specific user transaction
## /wallet/walletBalance/:userId
GET request for getting total amount of expenses, income and balance of all wallets of a specific user

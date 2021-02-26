# Open Banking

> App to access all of your financial data.

- Get all information about your customer's bank accounts.
- Get a list of bank transactions with all meta data.
- Get the balance at the end of each day for your customer's bank accounts.
- Get full details of a bank account owner.

> Technologies used

- **[React](https://facebook.github.io/react/)** (17.x)
- **[Typescript](https://www.typescriptlang.org/)** (4.x)

## Installation

1. Clone/download repo
2. `npm install`

## Usage

**Development**

`npm run start`

- App served @ `http://localhost:3000`

**Production**

`npm run start-prod`

- App served @ `http://localhost:8080`

---

**App Features**

| Feature              | Description                                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `Link Creation`      | User should be able to register a Link using their bank credentials.                                                              |
| `Information access` | Once the link is created, the backend side of the product should access the Accounts, Transactions, Owners and Balance endpoints. |
| `Reset`              | Can be used with multiple users.                                                                                                  |

# Next Backend App

This Next.js backend app is designed to interact with a PostgreSQL database using Prisma. It provides basic routing and database functionalities, including fetching and posting user data.

## Features

- **User Signup**: Create new users with a username and password.
- **User Fetch**: Retrieve user details from the database.
- **Database Integration**: Uses Prisma to manage PostgreSQL interactions.

## Setup

1. **Clone the Repository**:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Set Up Environment Variables**:
    Create a `.env` file in the root directory and add your database URL:
    ```env
    DATABASE_URL=postgres://<username>:<password>@<host>:<port>/<database>?sslmode=require
    ```

4. **Prisma Setup**:
    ```sh
    npx prisma migrate deploy
    npx prisma generate
    ```

5. **Run the Development Server**:
    ```sh
    npm run dev
    ```

## API Endpoints

### POST `/api/user`

Create a new user.

- **Request**:
    ```json
    {
      "username": "example",
      "password": "password"
    }
    ```

- **Response**:
    ```json
    {
      "msg": "You are logged in"
    }
    ```

### GET `/api/user`

Fetch user details.

- **Response**:
    ```json
    {
      "name": "Ishan Kumar",
      "email": "bhardwajishansingh@gmail.com"
    }
    ```

## File Structure

- **`/app/api/user/route.tsx`**: API routes for user signup and fetch.
- **`/components/Signup.tsx`**: Signup component to handle user input and submission.
- **`/prisma/schema.prisma`**: Prisma schema defining the User model.
- **`/pages/index.tsx`**: Main page displaying user details.

## Prisma Schema

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id       Int    @id @default(autoincrement())
  username String @unique
  password String
}

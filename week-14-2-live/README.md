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









This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

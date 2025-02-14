# Next.js User Management App

## Project Overview

This Next.js application provides a basic user signup and data retrieval system, leveraging a PostgreSQL database managed by Prisma. It's designed as a simple example of a full-stack application with a Next.js frontend and a database backend.

**Purpose:** To demonstrate basic user management functionality using Next.js, Prisma, and PostgreSQL.

**Key Features:**

*   User signup with username and password.
*   Retrieval of user details from the database.

**Target Audience:** Developers learning full-stack development with Next.js and Prisma.

## Setup Instructions

**Prerequisites:**

*   Node.js (version 18 or higher)
*   npm or yarn
*   PostgreSQL database

**Installation:**

1.  Clone the repository:

    ```bash
    git clone https://github.com/Allmight-456/Next_backend.git
    cd next_backend
    
2.  Install dependencies:

    ```bash
    npm install
    
**Configuration:**

1.  Create a `.env` file in the root directory and configure the database URL:

    ```env
    DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database>?sslmode=require"
    
    Replace `<user>`, `<password>`, `<host>`, `<port>`, and `<database>` with your PostgreSQL credentials.

2.  Run Prisma migrations:

    ```bash
    npx prisma migrate deploy
    npx prisma generate
    
**First-Time Run:**

1.  Start the development server:

    ```bash
    npm run dev
    
2.  Open your browser and navigate to `http://localhost:3000`.

## Core Modules and Architecture

**Components:**

*   **`/app/api/user/route.tsx`**: Handles API endpoints for user creation (POST) and retrieval (GET).
*   **`/components/Signup.tsx`**: React component for the signup form.
*   **`/prisma/schema.prisma`**: Prisma schema defining the `User` model.
*   **`/app/page.tsx`**: Main page that fetches and displays user data.

**Relationships:**

*   The `Signup` component sends user data to the `/api/user` endpoint.
*   The `/api/user` endpoint interacts with the PostgreSQL database via Prisma to create new users.
*   The `/app/page.tsx` fetches user data from the `/api/user` endpoint and displays it.

**Key Functionalities:**

*   **`/app/api/user/route.tsx`**:
    *   `POST`: Creates a new user in the database.
    *   `GET`: Retrieves user data from the database.
*   **`/components/Signup.tsx`**:
    *   Renders a signup form with username and password fields.
    *   Handles form submission and sends data to the API.
*   **`/prisma/schema.prisma`**:
    *   Defines the `User` model with `id`, `username`, and `password` fields.
*   **`/app/page.tsx`**:
    *   Fetches user data from the API.
    *   Displays the fetched user data.

## API Endpoints

### POST `/api/user`

Creates a new user.

**Request:**

```json
{
  "username": "testuser",
  "password": "password123"
}

**Response:**

```json
{
  "msg": "You are logged in"
}

**Error Handling:**

Returns an error message if the user already exists.

```json
{
  "error": "User already exists , Sign In"
}

Status code: 400

### GET `/api/user`

Retrieves user details.

**Response:**

```json
{
  "name": "Ishan Kumar",
  "email": "bhardwajishansingh@gmail.com"
}

## Usage Examples

**Common Use Cases:**

*   Signing up a new user.
*   Displaying user information on a profile page.

## Dependencies

**Libraries and Tools:**

*   `@prisma/client`: "^5.15.0"
*   `axios`: "^1.7.2"
*   `next`: "14.2.3"
*   `prisma`: "^5.15.0"
*   `react`: "^18"
*   `react-dom`: "^18"

**System Prerequisites:**

*   Operating System: Any OS that supports Node.js (Windows, macOS, Linux)

## Future Improvements and Roadmap

**Planned Enhancements:**

*   Implement user authentication and authorization.
*   Add password hashing for security.
*   Implement input validation on the client and server sides.
*   Add error handling and logging.

**Optimization Opportunities:**

*   Optimize database queries for performance.
*   Implement caching to reduce database load.

**Known Limitations:**

*   Basic signup functionality without email verification or password reset.
*   No user authentication or authorization.
```

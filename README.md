# Bitespeed Backend Task

This repository contains the backend implementation for the Bitespeed task. The project uses Node.js, Express.js, and Prisma ORM with a PostgreSQL database.

---

## 🚀 Features
- **Identify Contact API**: Links or creates primary and secondary contact entries.
- **Prisma ORM**: Database operations with PostgreSQL.
- **RESTful APIs**: Built using Express.js.

---

## 🛠️ Prerequisites
- Node.js (>=16.x)
- PostgreSQL database
- Prisma CLI (>=6.x)

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/repository-name.git
   cd repository-name
Install dependencies:

bash
Copy
Edit
npm install
Set up the environment variables:

Create a .env file in the root directory.
Add the following content:
env
Copy
Edit
DATABASE_URL="postgresql://user:password@localhost:5432/bitespeed"
PORT=3000
Apply Prisma migrations:

bash
Copy
Edit
npx prisma db push
🚀 Running the Application
Start the development server:

bash
Copy
Edit
npm start
The server will run on http://localhost:3000.

🛠️ API Endpoints
POST /identify
Identifies or creates primary/secondary contact entries based on the input email and phone number.
🛡️ Tech Stack
Node.js: Backend runtime
Express.js: Web framework
Prisma ORM: Database operations
PostgreSQL: Database
TypeScript: Typed JavaScript

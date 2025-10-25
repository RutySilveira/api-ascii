# Product API

**Product API**
Backend application for managing products, built with Node.js, TypeScript, Prisma, and Express. Includes API documentation with Swagger.

---

## ⚡ Features

- CRUD for Products (Create, Read, Update, Delete)
- List all products
- TypeScript for type safety
- Prisma ORM for database interactions
- Swagger API documentation
- Error handling middleware
- Modular architecture (controllers, services, routes)

---

## 🛠️ Technologies

- Node.js
- TypeScript
- Express
- Prisma
- PostgreSQL
- Swagger (API documentation)

---

## ⚡ Getting Started

1. Clone the repository

```bash
git clone https://github.com/RutySilveira/api-ascii
cd api-ascii
```

2. Install dependencies

```bash
npm install
```

3. Set up the database
   . Configure your .env file with database credentials:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```

4. Run Prisma migrations:

```bash
npx prisma migrate dev
```

5. Run the server

```bash
npm run dev
```

6. API Documentation

http://localhost:3000/api-docs

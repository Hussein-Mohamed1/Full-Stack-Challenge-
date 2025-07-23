# Full Stack Challenge

This project is a full-stack web app using Next.js (frontend), NestJS (backend), and MongoDB (database). It demonstrates clean architecture, API integration, and modern UI with shadcn/ui.

## Features

- Enter a website idea and generate 3 dummy sections (e.g., Hero, About, Contact)
- Stores and fetches sections from MongoDB
- Modern, beautiful UI using shadcn/ui
- Loading and error handling

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd full-stack-challenge
```

### 2. Install dependencies (root and backend)

```bash
npm install
cd backend
npm install
cd ..
```

### 3. Configure Environment Variables

- In `backend/`, create a `.env` file:
  ```
  MONGODB_URI=mongodb+srv://Hussein-1:<db_password>@cluster0.kxhjw.mongodb.net/
  ```
  Replace `<db_password>` with your actual MongoDB password (no angle brackets).

### 4. Start the Backend (NestJS)

```bash
cd backend
npm run start:dev
```

- The backend will run on `http://localhost:3001` (or your configured port).

### 5. Start the Frontend (Next.js)

```bash
npm run dev
```

- The frontend will run on `http://localhost:3000`

---

## Notes

- Make sure your `.env` file is **never** committed to git (it is in `.gitignore` by default).
- If you use a different MongoDB URI or port, update the code and `.env` accordingly.
- To add more shadcn/ui components, run:
  ```bash
  npx shadcn@latest add <component>
  ```
- For deployment, set the same environment variables on your server or platform (e.g., Vercel, Heroku).

---



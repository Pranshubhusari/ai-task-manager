# AI Task Manager (No-Login) — Ready-to-Run

This archive contains a minimal full-stack AI Task Manager (no-login) project.
It includes:
- `server/` : Express + OpenAI + MongoDB backend
- `client/` : Minimal React frontend

## What you need (step-by-step)
1. Install Node.js (v18+) and npm on your machine: https://nodejs.org
2. Create a free MongoDB Atlas account and a cluster:
   - https://www.mongodb.com/cloud/atlas
   - Create a database user and whitelist IP (or 0.0.0.0/0 for testing)
   - Get the connection string (replace <user>, <password>, <dbname>)
3. Create an OpenAI API key (optional but recommended for AI):
   - https://platform.openai.com/signup
   - Get your API key from the dashboard

## Setup (local)

### 1) Backend
```
cd server
npm install
# create a file named .env in the server/ folder with:
# MONGO_URI=your_mongodb_connection_string
# OPENAI_API_KEY=your_openai_api_key
node index.js
```
The server will run on port 5000 by default.

### 2) Frontend
```
cd client
npm install
# (Optional) to point frontend to the deployed backend set:
# REACT_APP_BACKEND_URL=https://your-backend-url
npm start
```
The React app runs on http://localhost:3000

## Deploying to the web

### Deploy server (Render)
1. Push the repo to GitHub.
2. In Render, create a new Web Service, connect your GitHub repo and select the `server` folder.
3. Set build command: `npm install`
   Start command: `node index.js`
4. Add environment variables in Render dashboard:
   - MONGO_URI
   - OPENAI_API_KEY

### Deploy client (Vercel)
1. In Vercel, import the GitHub repo and set the Root Directory to `client`.
2. Add environment variable (if using live backend):
   - REACT_APP_BACKEND_URL=https://your-render-backend-url

## Notes and troubleshooting
- If you don't have an OpenAI API key, the AI route will fail; in that case you can modify server/index.js to return a dummy priority (e.g., 'Medium').
- Do NOT commit your .env file to GitHub. Use Render & Vercel environment variables for deployment.
- If MongoDB connection fails, ensure IP access and user/password are correct.

## Files included
- server/index.js
- server/models/Task.js
- server/package.json
- server/.env.example
- client/package.json
- client/src/*

Good luck! If you want, I can now:
1) Provide exact Git commands to push this folder to a new GitHub repo.
2) Walk you through creating MongoDB Atlas and OpenAI accounts step-by-step.
3) Help deploy to Render and Vercel with exact clicks and values.

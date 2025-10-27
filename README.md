# 🧠 AI Task Manager (Full-Stack MERN App)

## 🪄 Overview
The **AI Task Manager** is a full-stack productivity web app that lets you create, organize, and prioritize tasks intelligently using **AI**.
It’s built using the **MERN stack** — **MongoDB, Express, React, and Node.js** — with integrated OpenAI API support for smart priority suggestions.

---

## ✨ Features
✅ Add, view, and delete tasks  
✅ Stores data in MongoDB Atlas (cloud database)  
✅ AI assigns a task priority (**High / Medium / Low**)  
✅ Responsive, beginner-friendly interface  
✅ Works locally (offline fallback available)  
✅ Ready to deploy on **Render (backend)** and **Vercel (frontend)**  

---

## 🧩 Tech Stack
| Part | Technology |
|------|-------------|
| Frontend | React.js (Create React App) |
| Backend | Node.js + Express |
| Database | MongoDB Atlas |
| AI | OpenAI API (GPT-3.5) |
| Hosting | Render + Vercel |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/ai-task-manager.git
cd ai-task-manager
```

### 2️⃣ Setup the backend
```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:
```
MONGO_URI=your_mongodb_connection_link
OPENAI_API_KEY=your_openai_api_key
```

Start the backend:
```bash
node index.js
```
✅ You should see
```
✅ MongoDB Connected
🚀 Server running on port 5000
```

---

### 3️⃣ Setup the frontend
```bash
cd ../client
npm install
```

Create a `.env` file inside the `client` folder:
```
REACT_APP_BACKEND_URL=http://localhost:5000
```

Start the app:
```bash
npm start
```
Visit 👉 http://localhost:3000

---

## 🚀 Deployment

### 🧠 Backend — Render
1. Go to https://render.com  
2. Create a new **Web Service** → connect your GitHub repo  
3. Root directory: `server`  
4. Build command: `npm install`  
5. Start command: `node index.js`  
6. Add environment variables (same as your `.env`)  
7. Deploy ✅  

### 💻 Frontend — Vercel
1. Go to https://vercel.com  
2. Import your GitHub repo  
3. Root directory: `client`  
4. Add environment variable:
   ```
   REACT_APP_BACKEND_URL=https://your-backend.onrender.com
   ```
5. Deploy ✅  

---

## ⚡ AI Feature Note
If your OpenAI API quota runs out, the app will still work using a **random priority fallback**.
You can later restore the real AI route once your OpenAI billing is active.

---

## 🖼️ Screenshots (Add later)
| Homepage | Task List | AI Priority |
|-----------|------------|-------------|
| *(Add your screenshots here)* | | |

---

## 🧑‍💻 Author
**Pranshu Bhusari**  
⭐ [GitHub Profile](https://github.com/YOUR-USERNAME)

---

## 📜 License
This project is licensed under the **MIT License** — feel free to use and modify it.

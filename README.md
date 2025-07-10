Arcasya.ai is an AI-powered backend and automation platform developed by **True Mark USA**. It empowers American service businesses with integrated CRM systems, custom AI agents, and seamless cloud + local workflows.

This is the monorepo containing both the **frontend (React + Vite)** and the **backend (Node.js + Express)**.

---

## 🧱 Monorepo Structure

arcasya.ai-website/
├── frontend/ # Vite + React + Firebase login
├── backend/ # Node.js + Express + Firebase token auth
└── README.md

yaml
Copy
Edit

---

## 🚀 Frontend

### Features:
- Built with **React + TypeScript + Vite**
- **Firebase Authentication** (Email/Password)
- Token-based auth with backend
- Modular pages (Home, About, Login, etc.)

### Local Dev:

bash
cd frontend
npm install
npm run dev
Frontend runs at: http://localhost:5173

🔧 Backend
Features:
Built with Node.js + TypeScript

Express API with protected routes

Firebase Admin SDK for token verification

Ready for PostgreSQL + AI agent expansion

Local Dev:
bash
Copy
Edit
cd backend
npm install
npm run dev
Backend runs at: http://localhost:5000

🔐 Firebase
Firebase Project: arcasyaai-website

Auth: Email/Password

Admin SDK used on backend (without service account key)

📦 Deployment
Frontend (Firebase Hosting):
bash
Copy
Edit
cd frontend
npm run build
firebase deploy
Backend:
Planned deployment to Google Cloud Run or Render.

🧭 Roadmap
 Frontend + backend monorepo

 Firebase login + auth token verification

 AI Agent framework (LangChain / Ollama / n8n)

 CRM integrations (Jobber, HubSpot)

 Multi-tenant ecosystem support

 Local J.A.R.V.I.S.-style agent

🗽 Created by
True Mark USA
An America-First company building tech for local resilience.
https://truemarkusa.com

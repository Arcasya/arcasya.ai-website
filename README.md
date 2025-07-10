# Arcasya.ai

Arcasya.ai is an AI-powered backend and automation platform developed by **True Mark USA**. It empowers American service businesses with integrated CRM systems, custom AI agents, and seamless cloud + local workflows.

This is the monorepo containing both the **frontend (React + Vite)** and the **backend (Node.js + Express)**.

---

## 📚 Table of Contents

- [Monorepo Structure](#-monorepo-structure)
- [Frontend](#-frontend)
- [Backend](#-backend)
- [Firebase Configuration](#-firebase-configuration)
- [Deployment](#-deployment)
- [Platform Roadmap](#-platform-roadmap)
- [Why Arcasya.ai](#-why-arcasyaai)
- [Created by](#-created-by)

---

## 🧱 Monorepo Structure

<pre> <code> ``` arcasya.ai-website/ ├── frontend/ # Vite + React + Firebase login ├── backend/ # Node.js + Express + Firebase token auth └── README.md ``` </code> </pre>

---

## 🚀 Frontend

### Features

- Built with **React + TypeScript + Vite**
- **Firebase Authentication** (Email/Password)
- Token-based authentication with backend
- Modular structure (Home, About, Login, Dashboard, etc.)

### Local Development

```bash
cd frontend
npm install
npm run dev
# Frontend runs at: http://localhost:5173

---

## 🔧 Backend

### Features

- Built with **Node.js + TypeScript + Express**
- RESTful API with protected routes
- **Firebase Admin SDK** for token verification
- Structured for PostgreSQL and AI agent expansion

### Local Development

```bash
cd backend
npm install
npm run dev
# Backend runs

---

## 🔐 Firebase Configuration

- **Firebase Project**: `arcasyaai-website`
- **Authentication**: Email/Password
- **Admin SDK**: Used on backend for token verification (no service account key required)
---

## 📦 Deployment

### Frontend (Firebase Hosting)

```bash
cd frontend
npm run build
firebase deploy

---

## 🛠 Platform Roadmap

- ✅ Frontend + backend monorepo setup
- ✅ Firebase login + auth token verification
- 🔄 AI Agent framework (LangChain, Ollama, n8n)
- 🔄 Cross-CRM integrations (Jobber, HubSpot, etc.)
- 🔄 Multi-tenant ecosystem support
- 🔄 Local J.A.R.V.I.S.-style desktop agent (planned)

---

## 💡 Why Arcasya.ai?

- **Custom AI Agents**: Master + Specialized agents with memory
- **Cross-CRM Integration**: HubSpot, Jobber, ServiceTitan, and more
- **Cloud + Local Automation**: Desktop agent support in development
- **Multi-Tenant Ecosystem**: Designed for collaborative networks
- **Natural Language Ops**: Prompt-to-action execution
- **America-First Tech**: Focused on local service resilience

---

## 🗽 Created by

**True Mark USA** — An America-first tech company building tools to empower local business ecosystems with ethical, AI-driven solutions.

🔗 [truemarkusa.com](https://truemarkusa.com)

> "Launching service businesses into the future with AI."

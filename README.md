# 🚀 Prottush Islam — Portfolio Website

A professional developer portfolio with glassmorphism design + Node.js/Express backend for contact form email delivery.

## 📁 Project Structure

```
portfolio/
├── frontend/
│   └── index.html          ← Main portfolio (open this in browser)
│
└── backend/
    ├── server.js           ← Express server entry point
    ├── package.json        ← Dependencies
    ├── .env.example        ← Environment variables template
    ├── .env                ← Your secrets (create from .env.example)
    └── routes/
        └── contact.js      ← Email contact route with validation
```

## ⚡ Quick Start

### Step 1 — Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env`:
```
EMAIL_USER=prottushislam17@gmail.com
EMAIL_PASS=your_gmail_app_password
PORT=5000
FRONTEND_URL=http://localhost:3000
```

> **How to get Gmail App Password:**
> 1. myaccount.google.com → Security
> 2. Enable 2-Step Verification
> 3. App Passwords → Select "Mail" → Generate
> 4. Copy the 16-character password into EMAIL_PASS

```bash
npm run dev   # starts on http://localhost:5000
```

### Step 2 — Frontend

Just open `frontend/index.html` in your browser!
The contact form will connect to `http://localhost:5000/api/contact`.

---

## 🌐 Deployment

### Frontend → Netlify (Free, Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop the `frontend/` folder
3. Done! Get your live URL.

### Backend → Railway (Free)
1. Push `backend/` folder to a GitHub repo
2. Go to [railway.app](https://railway.app) → New Project → GitHub
3. Add your `.env` variables in Railway dashboard
4. Deploy → get your API URL (e.g. `https://your-app.railway.app`)
5. Update `API_URL` in `frontend/index.html`:
   ```js
   const API_URL = 'https://your-app.railway.app/api/contact';
   ```

---

## 🔌 API Reference

### Health Check
```
GET /api/health
→ { "status": "OK", "message": "..." }
```

### Send Contact Email
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Collaboration",
  "message": "Hello Prottush..."
}

→ { "success": true, "message": "Thanks John! ..." }
```

**Features:**
- ✅ Input validation (express-validator)
- ✅ Rate limiting (10 requests / 15 min)
- ✅ Security headers (helmet)
- ✅ CORS protection
- ✅ Auto-reply email to sender
- ✅ Notification email to you

---

## 🛡️ Security Features
- Rate limiting prevents spam
- Helmet.js sets secure HTTP headers
- Input validation & sanitization
- CORS whitelist
- Request body size limit (10kb)

---

Made with ❤️ by Prottush Islam · Bangladesh

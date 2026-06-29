# 🚀 AuraPrompt Deployment Guide

Complete guide to deploy AuraPrompt Backend on various platforms.

---

## 📋 Prerequisites

Before deploying, ensure you have:
- ✅ GitHub account with your repo
- ✅ Groq API key (from [console.groq.com](https://console.groq.com))
- ✅ Basic knowledge of Node.js

---

## 🚀 Option 1: Deploy on Render (Recommended - FREE)

**Best for:** Free hosting, easy setup, auto-deploy from GitHub

### Step-by-Step

1. **Go to [render.com](https://render.com)**
2. **Click "New +" → Select "Web Service"**
3. **Connect GitHub:**
   - Click "Connect account"
   - Authorize and select your repository
   - Select `auraprompt-backend` repo

4. **Configure:**
   - **Name:** `auraprompt-backend`
   - **Environment:** Node
   - **Region:** Choose closest to you
   - **Branch:** main
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

5. **Add Environment Variables:**
   - Click "Add Secret File"
   - Add `.env` with:
   ```
   GROQ_API_KEY=your_groq_api_key_here
   PORT=3001
   ```

6. **Deploy!**
   - Click "Create Web Service"
   - Wait 2-3 minutes for build
   - Your URL: `https://auraprompt-backend.onrender.com`

### Auto-Deploy from GitHub
- Every push to `main` branch → automatic deployment
- No manual steps needed after initial setup

---

## 🚀 Option 2: Deploy on Railway (FREE Tier Available)

**Best for:** Simple deployment, GitHub integration, free tier

### Step-by-Step

1. **Visit [railway.app](https://railway.app)**
2. **Click "New Project" → "Deploy from GitHub repo"**
3. **Connect GitHub:**
   - Authorize Railway
   - Select `auraprompt-backend` repo

4. **Add Environment Variables:**
   - Go to "Variables"
   - Add `GROQ_API_KEY`
   - Add `PORT=3001`

5. **Configure:**
   - Railway auto-detects Node.js
   - Sets up automatically

6. **Deploy:**
   - Click "Deploy"
   - Get your URL from "Deployments"
   - Example: `https://auraprompt-backend-prod.up.railway.app`

---

## 🚀 Option 3: Deploy on Vercel (Next.js/Full Stack)

**Best for:** Full-stack apps with frontend + backend

### Step-by-Step

1. **Visit [vercel.com](https://vercel.com)**
2. **Click "New Project" → Select your GitHub repo**
3. **Framework:** Node.js
4. **Add Environment Variables:**
   - `GROQ_API_KEY`: Your API key
   - `PORT`: 3001

5. **Deploy!**

**Note:** Works best if you have Next.js frontend integrated.

---

## ✅ Post-Deployment Checklist

After deploying, verify:

- [ ] Server is running
- [ ] Health check endpoint works:
  ```bash
  curl https://your-deployed-url.com/
  # Should return: {"status":"AuraPrompt Backend Running! 🚀"}
  ```

- [ ] API endpoint works:
  ```bash
  curl -X POST https://your-deployed-url.com/generate \
    -H "Content-Type: application/json" \
    -d '{"scene":"Test","variations":false}'
  ```

- [ ] Rate limiting works
- [ ] Groq API is accessible
- [ ] Logs are available
- [ ] Error handling is working

---

## 🔧 Environment Variables

### Required
```
GROQ_API_KEY=gsk_your_key_here
```

### Optional
```
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://your-frontend.com
```

---

## 🆘 Getting Help

- **Render Issues:** [docs.render.com](https://docs.render.com)
- **Railway Issues:** [railway.app/docs](https://railway.app/docs)
- **Groq Issues:** [console.groq.com/docs](https://console.groq.com/docs)
- **GitHub Issues:** [Open an issue](https://github.com/hassaanghaffar923-rgb/auraprompt-backend/issues)

---

## 📝 Recommended: Render (Step-by-Step)

1. Visit [render.com](https://render.com) → Sign up
2. Click "New +" → "Web Service"
3. Connect GitHub → Select this repo
4. Name: `auraprompt-backend`
5. Build: `npm install`
6. Start: `npm start`
7. Add Secret: `GROQ_API_KEY=your_key`
8. Click "Create"
9. Wait 2-3 min → You're live! 🎉

---

<div align="center">

**Deployed? [Star us on GitHub!](https://github.com/hassaanghaffar923-rgb/auraprompt-backend)** ⭐

</div>
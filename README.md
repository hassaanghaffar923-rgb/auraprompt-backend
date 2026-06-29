# 🚀 AuraPrompt — AI Video Prompt Studio

**The #1 Free AI Video Prompt Engineering Platform** designed for creators using Runway Gen-3, Luma, Sora, and other advanced text-to-video models.

Generate cinematic, high-quality prompts with granular control over camera movements, lighting, mood, and style—**completely free and open-source**.

[![GitHub Stars](https://img.shields.io/github/stars/hassaanghaffar923-rgb/auraprompt-backend?style=social)](https://github.com/hassaanghaffar923-rgb/auraprompt-backend)
[![License: ISC](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)

---

## 🌟 Live Demo

🔗 **[Visit AuraPrompt Studio](https://candid-froyo-fc9f19.netlify.app)**

---

## 🔥 Key Features

### 📹 **Granular Camera Controls**
- Select exact camera movements: **Dolly, Pan, Zoom, Crane, Orbit**
- Precise camera angles: **Eye Level, High Angle, Low Angle, Dutch Angle**
- Dynamic camera transitions for cinematic results

### 💡 **Cinematic Lighting & Styles**
- Pre-built lighting presets: **Golden Hour, Neon, Cyberpunk, Film Noir, Soft Light**
- Color grading options: **Cinematic, Warm, Cool, Vintage, Desaturated**
- Professional mood settings: **Dramatic, Whimsical, Intense, Peaceful, Energetic**

### 🎬 **Multi-Variation Generation**
- Generate **3 distinct prompt variations** simultaneously
- Different creative approaches for each variation
- Smart prompt refinement using Llama 3.3 (70B) via Groq API

### ⚡ **Smart Rate Limiting**
- **5 free prompts per day** per user (IP-based)
- Prevents abuse while keeping it accessible
- Upgrade paths for unlimited usage

### 🎨 **Advanced Customization**
- Aspect ratio selection: **16:9, 9:16, 1:1, 4:3, 21:9**
- Music & sound suggestions
- Duration control
- Reference style matching
- Color grading preferences

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|----------|
| **Frontend** | React / Next.js (Netlify) |
| **Backend** | Node.js + Express |
| **AI Engine** | Groq API (Llama 3.3 70B) |
| **API Calls** | RESTful with CORS support |

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ ([Download here](https://nodejs.org/))
- npm or yarn
- Groq API Key ([Get free key](https://console.groq.com))

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/hassaanghaffar923-rgb/auraprompt-backend.git
cd auraprompt-backend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory:
```env
GROQ_API_KEY=your_groq_api_key_here
PORT=3001
NODE_ENV=development
```

**Get your Groq API Key:**
1. Visit [https://console.groq.com](https://console.groq.com)
2. Sign up (free account)
3. Create API key
4. Copy and paste into `.env`

### 4️⃣ Start the Server
```bash
npm start
```

**Expected Output:**
```
Server running on port 3001 ✅
```

Test the server:
```bash
curl http://localhost:3001
# Response: { "status": "AuraPrompt Backend Running! 🚀" }
```

---

## 🔌 API Endpoints

### `POST /generate`
Generate AI video prompts with full customization.

**Request Body:**
```json
{
  "scene": "A dragon flying over snowy mountains at sunset",
  "style": "Cinematic",
  "mood": "Dramatic",
  "ratio": "16:9",
  "camera": "Eye Level",
  "movement": "Dolly Forward",
  "lighting": "Golden Hour",
  "color": "Cinematic",
  "reference": "Avatar (2009)",
  "music": "Cinematic Orchestra",
  "duration": "15 seconds",
  "variations": false
}
```

**Response (Single Prompt):**
```json
{
  "prompt": "Ultra-cinematic wide shot of a majestic dragon soaring through clouds over snow-capped peaks...",
  "sound": "Epic orchestral score with ethereal strings and powerful brass...",
  "remaining": 4
}
```

**Response (3 Variations):**
```json
{
  "variations": [
    "Variation 1 prompt text...",
    "Variation 2 prompt text...",
    "Variation 3 prompt text..."
  ],
  "remaining": 4
}
```

**Query Parameters:**
- `variations` (boolean): Generate 3 variations (set to `true`)
- `scene` (required, string): Your video idea
- `style` (optional, string): Default: "Cinematic"
- `mood` (optional, string): Default: "Dramatic"

**Rate Limiting:**
- **5 prompts per day per IP**
- Rate exceeded response:
```json
{
  "error": "Daily limit reached! Upgrade to Pro for unlimited prompts.",
  "limitReached": true
}
```

---

## 🚀 Deployment

### Deploy on Render (Recommended - Free Tier)

1. **Push to GitHub** (already done ✅)
2. **Visit [https://render.com](https://render.com)**
3. **Create new Web Service**
4. **Connect your GitHub repo**
5. **Set Environment Variable:**
   - Key: `GROQ_API_KEY`
   - Value: Your Groq API key
6. **Deploy!**

**Live URL:** `https://your-service-name.onrender.com`

For detailed deployment guides, see [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 💻 Local Development

### Start Development Server with Auto-Reload
```bash
npm install -g nodemon
npm run dev
```

### Test API Endpoints
```bash
# Generate single prompt
curl -X POST http://localhost:3001/generate \
  -H "Content-Type: application/json" \
  -d '{
    "scene": "A futuristic city with flying cars",
    "style": "Cyberpunk",
    "variations": false
  }'

# Generate 3 variations
curl -X POST http://localhost:3001/generate \
  -H "Content-Type: application/json" \
  -d '{
    "scene": "A futuristic city with flying cars",
    "variations": true
  }'
```

---

## 📊 How It Works

```
User Input → Backend API → Groq (Llama 3.3) → AI-Generated Prompt → Response
```

1. **User submits** scene description + preferences
2. **Backend validates** input and checks rate limit
3. **Groq API** processes prompt with Llama 3.3 70B
4. **Response parsed** into formatted prompt + sound suggestions
5. **Usage tracked** by IP address (daily reset)

---

## 🎯 Use Cases

✅ **Video Creators** - Generate prompts for Runway, Luma, Sora
✅ **Content Producers** - Batch generate multiple prompt variations
✅ **AI Enthusiasts** - Experiment with prompt engineering
✅ **Filmmakers** - Rapid prototyping of visual ideas
✅ **Educators** - Learn prompt engineering best practices

---

## 🤝 Contributing

We ❤️ contributions! Here's how to help:

1. **Fork the repository**
2. **Create feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make changes** and commit (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open Pull Request**

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

### Contribution Ideas:
- 🎨 Add new lighting presets
- 🎬 Expand camera movement options
- 🔧 Improve error handling
- 📚 Enhance documentation
- 🚀 Add new AI models support

---

## 🐛 Bug Reports & Features

Found a bug? Have a feature request?

**[Open an Issue →](https://github.com/hassaanghaffar923-rgb/auraprompt-backend/issues)**

Please include:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Environment details

---

## 📝 License

This project is licensed under the **ISC License** - see [LICENSE](LICENSE) file for details.

---

## 🙏 Support & Acknowledgments

### Made with ❤️ by a Solo Developer

If you find AuraPrompt helpful:
- ⭐ **Star this repository** on GitHub
- 📢 **Share with your network**
- 💬 **Give feedback & suggestions**
- 🤝 **Contribute to the project**

### Special Thanks

- **Groq** - For the powerful Llama API
- **Runway ML** - For inspiring prompt engineering
- **Open Source Community** - For amazing tools

---

## 📚 Resources & Learning

- 📖 [Groq API Documentation](https://console.groq.com/docs)
- 🎥 [Runway Gen-3 Docs](https://runway.com)
- 🤖 [Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- 💡 [AI Video Creation Tips](https://www.reddit.com/r/StableDiffusion/)

---

## 🔮 Roadmap

- [ ] User authentication & accounts
- [ ] Saved prompts library
- [ ] Prompt templates marketplace
- [ ] Advanced analytics
- [ ] Mobile app (React Native)
- [ ] Premium tier features
- [ ] Multi-language support
- [ ] Discord bot integration

---

## 📞 Contact & Social

- 💬 **GitHub Issues:** [Open Issue](https://github.com/hassaanghaffar923-rgb/auraprompt-backend/issues)
- 🌐 **Website:** [candid-froyo-fc9f19.netlify.app](https://candid-froyo-fc9f19.netlify.app)

---

## ⚡ Quick Stats

- **Free & Open Source** ✅
- **0% Cost to Use** ✅
- **5 Prompts/Day** ✅
- **Multiple Variations** ✅
- **Professional Quality** ✅
- **Easy to Deploy** ✅

---

<div align="center">

### Made for Video Creators, By a Developer 🎬

**[⭐ Star Us on GitHub](https://github.com/hassaanghaffar923-rgb/auraprompt-backend)** | **[🚀 Visit Live Demo](https://candid-froyo-fc9f19.netlify.app)**

</div>
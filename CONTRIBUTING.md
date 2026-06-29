# Contributing to AuraPrompt 🚀

Thank you for your interest in contributing to AuraPrompt! We welcome contributions from developers of all levels.

## 🤝 How to Contribute

### 1. Fork the Repository
Click the "Fork" button on GitHub to create your own copy.

### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR_USERNAME/auraprompt-backend.git
cd auraprompt-backend
```

### 3. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

Use descriptive names:
- `feature/add-new-lighting-preset`
- `fix/rate-limiting-bug`
- `docs/improve-readme`

### 4. Make Your Changes
- Write clean, readable code
- Add comments for complex logic
- Follow existing code style

### 5. Test Your Changes
```bash
npm start
# Test your changes manually
```

### 6. Commit Your Changes
```bash
git commit -m "feat: Add new camera movement option"
```

Use conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation
- `chore:` for maintenance

### 7. Push to Your Fork
```bash
git push origin feature/your-feature-name
```

### 8. Open a Pull Request
1. Go to the original repository
2. Click "Pull Request"
3. Select your branch
4. Add title and description
5. Submit!

## 📋 Contribution Ideas

### Features
- [ ] Add new lighting presets (Neon, Sunset, Stormy, etc.)
- [ ] Add new camera movements
- [ ] Aspect ratio templates
- [ ] Music suggestion database
- [ ] Prompt history
- [ ] Favorites/bookmarks
- [ ] Export prompts to CSV/JSON

### Improvements
- [ ] Better error messages
- [ ] Input validation
- [ ] Performance optimization
- [ ] Caching system
- [ ] API documentation
- [ ] Unit tests

### Documentation
- [ ] Tutorial videos
- [ ] Example prompts
- [ ] API examples
- [ ] Deployment guides
- [ ] Troubleshooting guide

## 📝 Code Style Guidelines

### JavaScript/Node.js
```javascript
// ✅ GOOD
function generatePrompt(scene, style) {
  // Clear, descriptive variable names
  const basePrompt = `Scene: ${scene}`;
  return basePrompt;
}

// ❌ BAD
function gp(s, st) {
  const p = `Scene: ${s}`;
  return p;
}
```

### Comments
```javascript
// Add comments for WHY, not WHAT
// ✅ GOOD
// Rate limit by IP to prevent abuse
if (usage >= 5) {
  return res.status(429).json({ error: 'Limit reached' });
}

// ❌ BAD
// Check if usage is greater than 5
if (usage >= 5) {
  ...
}
```

## 🧪 Testing Your Changes

### Manual Testing
```bash
# Start server
npm start

# Test endpoint in another terminal
curl -X POST http://localhost:3001/generate \
  -H "Content-Type: application/json" \
  -d '{"scene": "Test scene", "variations": false}'
```

## 🐛 Reporting Bugs

### Good Bug Report
- Clear title
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment info (Node version, OS)

## ✅ Pull Request Checklist

Before submitting:
- [ ] Code follows style guidelines
- [ ] Changes tested locally
- [ ] Comments/documentation added
- [ ] No console.log left behind
- [ ] Commit message is clear

## 🎉 Thank You!

Your contributions make AuraPrompt better for everyone!

---

**Made with ❤️ by the AuraPrompt community**
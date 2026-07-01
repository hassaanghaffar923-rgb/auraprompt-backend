const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
const usageMap = {};
function getToday() { return new Date().toISOString().split('T')[0]; }
function checkLimit(ip) {
  const today = getToday();
  if (!usageMap[ip]) usageMap[ip] = {};
  if (!usageMap[ip][today]) usageMap[ip][today] = 0;
  return usageMap[ip][today];
}
function incrementUsage(ip) {
  const today = getToday();
  if (!usageMap[ip]) usageMap[ip] = {};
  if (!usageMap[ip][today]) usageMap[ip][today] = 0;
  usageMap[ip][today]++;
}
async function callGroq(prompt) {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }]
    })
  });
  const data = await response.json();
  if (data.error) throw new Error(data.error.message);
  return data.choices[0].message.content;
}
app.post('/generate', async (req, res) => {
  const ip = req.ip;
  const { scene, style, mood, ratio, camera, movement, lighting, color, reference, music, duration, variations } = req.body;
  if (!scene) return res.status(400).json({ error: 'Scene description required' });
  const usage = checkLimit(ip);
  if (usage >= 5) {
    return res.status(429).json({
      error: 'Daily limit reached! Upgrade to Pro for unlimited prompts.',
      limitReached: true
    });
  }
  const baseInfo = `
User's idea: "${scene}"
Style: ${style || 'Cinematic'}
Mood: ${mood || 'Dramatic'}
Aspect Ratio: ${ratio || '16:9'}
Camera Angle: ${camera || 'Eye Level'}
Camera Movement: ${movement || 'Static'}
Lighting: ${lighting || 'Golden Hour'}
Color Grade: ${color || 'Cinematic'}
Reference Style: ${reference || 'None'}
Music: ${music || 'Cinematic Orchestra'}
Duration: ${duration || '10 seconds'}`;
  try {
    if (variations) {
      const text = await callGroq(`You are an expert AI video prompt engineer.
${baseInfo}
Generate exactly 3 different video prompt variations with different creative approaches.
Format EXACTLY like this:
VARIATION1: [prompt here]
VARIATION2: [prompt here]
VARIATION3: [prompt here]
Each prompt: detailed, vivid, under 150 words, include camera movements, lighting, atmosphere.`);
      const v1 = text.match(/VARIATION1:\s*([\s\S]*?)(?=VARIATION2:|$)/)?.[1]?.trim() || '';
      const v2 = text.match(/VARIATION2:\s*([\s\S]*?)(?=VARIATION3:|$)/)?.[1]?.trim() || '';
      const v3 = text.match(/VARIATION3:\s*([\s\S]*?)$/)?.[1]?.trim() || '';
      incrementUsage(ip);
      res.json({ variations: [v1, v2, v3], remaining: 5 - (usage + 1) });
    } else {
      const text = await callGroq(`You are an expert AI video prompt engineer.
${baseInfo}
Respond EXACTLY in this format (no extra text before PROMPT:):
PROMPT: [detailed video prompt under 200 words with camera movements, lighting, atmosphere, technical details]
SOUND: [2-3 sentence sound/music suggestion matching the video mood]`);
      const promptText = text.match(/PROMPT:\s*([\s\S]*?)(?=SOUND:|$)/)?.[1]?.trim() || text;
      const soundText = text.match(/SOUND:\s*([\s\S]*?)$/)?.[1]?.trim() || '';
      incrementUsage(ip);
      res.json({ prompt: promptText, sound: soundText, remaining: 5 - (usage + 1) });
    }
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// NEW ROUTE — remaining prompts batata hai bina koi prompt generate kiye
app.get('/usage', (req, res) => {
  const ip = req.ip;
  const usage = checkLimit(ip);
  res.json({ remaining: Math.max(0, 5 - usage) });
});

app.get('/', (req, res) => res.json({ status: 'AuraPrompt Backend Running! 🚀' }));
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

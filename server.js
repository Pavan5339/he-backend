const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();

const app = express();

app.use(cors({
  origin: 'https://tangerine-macaron-709f9d.netlify.app/', // your frontend
  credentials: true
}));
app.use('/api/auth', authRoutes);


app.use(express.json()); // lets backend read JSON from frontend

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch((err) => {
  console.log('❌ DB connection error:', err);
});

app.get('/', (req, res) => {
  res.send('🎉 Backend is running!');
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

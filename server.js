const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

// ✅ Body parser FIRST
app.use(express.json());

// ✅ CORS setup
app.use(cors({
  origin: 'https://tangerine-macaron-709f9d.netlify.app', // remove trailing slash
  credentials: true
}));

// ✅ Then routes
app.use('/api/auth', authRoutes);

// ✅ MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.log('❌ DB connection error:', err));

app.get('/', (req, res) => {
  res.send('🎉 Backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

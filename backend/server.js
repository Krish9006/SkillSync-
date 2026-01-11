require('dotenv').config(); // 1. Load env vars
const express = require('express');
const connectDB = require('./src/db/db'); // 2. Import your DB logic

const port = process.env.PORT || 5000;
const app = express();
const cors = require('cors');

app.use(cors({
    origin: ['http://localhost:3000', 'https://skillsynkrish.netlify.app'],
    credentials: true
}));

app.use(express.json());

// 3. Connect to Database
// 3. Connect to Database
connectDB();

const coreRoutes = require('./routes/core.routes');
const authRoutes = require('./routes/auth.routes');
const requestRoutes = require('./routes/request.routes');

app.use('/api/auth', authRoutes);
app.use('/api', coreRoutes);
app.use('/api/requests', requestRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
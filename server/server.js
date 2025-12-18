import dotenv from 'dotenv'

dotenv.config();

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDB from './utils/connectDB.js'
import authRoutes from './routes/authRoutes.js'
import emergencyRoutes from './routes/emergencyRoutes.js'
import profileRoutes from './routes/profileRoutes.js'
import logRoutes from './routes/logRoutes.js'
import reminderRoutes from './routes/reminderRoutes.js';
 
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

connectDB();

app.use('/users', authRoutes);
app.use('/emergency', emergencyRoutes);
app.use('/profile', profileRoutes);
app.use('/logs', logRoutes);
app.use('/reminder', reminderRoutes);

app.get('/', (req, res) => {
    res.end('API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
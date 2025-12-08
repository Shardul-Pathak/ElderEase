import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Elder', required: true },
    mood: { type: String, enum: ['happy', 'sad', 'neutral'] },
    symptom: { type: String }
}, { timestamps: true });
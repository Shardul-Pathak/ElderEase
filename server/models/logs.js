import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now(), required: true},
    mood: { type: String, enum: ['great', 'okay', 'bad'] },
    medicine: { type: Boolean },
    sleep: { type: String, enum: ['good', 'average', 'poor'] },
    water: { type: String, enum: ['low', 'medium', 'high'] },
    activity: { type: String, enum: ['walk', 'exercise', 'none'] },
    symptom: { type: String }
}, { timestamps: true });

const Logs = mongoose.model('Log', logSchema);
export default Logs;
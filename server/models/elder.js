import mongoose from 'mongoose';

const elderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", "other"] },
    age: { type: Number },
    bio: { type: String }
});

const Elder = mongoose.model('User', elderSchema);

export default Elder;
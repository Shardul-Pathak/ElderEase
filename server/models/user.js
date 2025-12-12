import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["ELDER", "FAMILY"], required: true },
    gender: { type: String, enum: ["male", "female", "other"] },
    age: { type: Number },
    bio: { type: String },
    associatedElders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Elder' }],
    contactNumber: { type: String }
});

const Users = mongoose.model('User', userSchema);

export default Users;
import mongoose from 'mongoose';

const familySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    associatedElders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Elder' }],
    contactNumber: { type: String }
});

const Family = mongoose.model('Family', familySchema);

export default Family;
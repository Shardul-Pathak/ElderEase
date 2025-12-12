import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: {type: String, required: true},
    contact: {type: String, required: true},
    relation: {type: String, required: true},
    associated: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Contacts = mongoose.model('Contacts', contactSchema);

export default Contacts;
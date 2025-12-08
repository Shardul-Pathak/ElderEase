import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Elder', required: true },
    message: { type: String, required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ["SKIPPED", "DONE"], default: false }
}, { timestamps: true });

const Reminder = mongoose.model("Reminder", reminderSchema);

export default Reminder;
import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Elder', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    frequency: { type: String, enum: ["Daily", "Weekly", "One-Time"]},
    time: { type: Date, required: true },
    timeLeft: { type: Date, required: true },
    status: { type: String, enum: ["Completed", "Missed", "Pending"], default: "Pending" }
}, { timestamps: true });

const Reminder = mongoose.model("Reminder", reminderSchema);

export default Reminder;
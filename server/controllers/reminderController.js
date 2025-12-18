import Reminder from '../models/reminders.js';
import Users from '../models/user.js';

export async function addReminder (req,res) {
    const id = req.user.id;
    const { title, frequency, time, description } = req.body;
    const formattedTime = new Date(time).getTime();
    try {
        const newReminder = new Reminder({
            userId: id,
            title: title,
            frequency: frequency,
            description: description,
            time: formattedTime,
            timeLeft: formattedTime-Date.now(),
        });
        await newReminder.save();
        const reminders = await Reminder.find({userId: id});
        res.status(200).json({reminders: reminders});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error});
    }
}

export async function getReminders (req, res) {
    const id = req.user.id;
    const reminders = await Reminder.find({userId: id});
    res.status(200).json({
        reminders: reminders
    });
}

export async function getRemindersCT (req, res) {
    const id = req.user.id;
    try {
        const user = await Users.findById(id);
        const reminders = await Reminder.find({userId: user.associatedElders[0]});
        res.status(200).json({reminders: reminders});
    } catch(error) {
        res.status(500).json({error: error})
    }
}

export async function updateReminders (req, res) {
    const id = req.body.id;
    const reminder = await Reminder.findByIdAndUpdate(id, {
        status: "Completed"
    }, {new: true});
    res.status(200).json({
        reminders: reminder
    });
}

export async function getNames (req, res) {
    const id = req.user.id;
    try {
        const user = await Users.findById(id);
        const associatedUser = await Users.findById(user.associatedElders[0]);
        const names = {
            id: user.associatedElders[0], 
            name: associatedUser.name
        }
        res.status(200).json({names: names});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error});
    }
}

const rems = async(id) => {
    const reminders = await Reminder.findById(id);
    return reminders;
}
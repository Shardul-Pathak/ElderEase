import Logs from '../models/logs.js';
import Log from '../models/logs.js';
import Users from '../models/user.js';
import generateReport from '../utils/generateReport.js';

export async function addLog(req,res) {
    const id = req.user.id;
    const { mood, medTaken, sleep, water, activity } = req.body;
    try {
        const newLog = new Log ({
            userId: id,
            mood: mood,
            medicine: medTaken,
            sleep: sleep,
            water: water,
            activity: activity
        })
        await newLog.save()
        res.status(200).json({message: "log added", id: newLog._id});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error});
    }
}

export async function addSymptom(req,res) {
    const id = req.user.id;
    const { symptom } = req.body;
    try {
        const newLog = new Log ({
            userId: id,
            symptom: symptom
        })
        await newLog.save()
        res.status(200).json({message: "log added", id: newLog._id});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error});
    }
}

export async function getLogs(req,res) {
    const id = req.user.id;
    try {
        const logs = await Logs.find({userId: id});
        res.status(200).json({logs: logs});
    } catch (error) {
        res.status(500).json({error: error});
    } 
}

export async function getLogsCT(req,res) {
    const id = req.user.id;
    try {
        const user = await Users.findById(id);
        const associated = await Users.findById(user.associatedElders[0]);
        const logs = await Logs.find({userId: user.associatedElders[0]});
        res.status(200).json({name: associated.name, logs: logs});
    } catch (error) {
        res.status(500).json({error: error});
    } 
}

export async function getLogById(req,res) {
    const id = req.body.id;
    try {
        const log = await Logs.findById(id);
        res.status(200).json({log: log});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error});
    } 
}

export async function getReport(req,res) {
    const data = req.body.data;
    try{
        const report = await generateReport(data.name, data.logs);
        res.status(200).json({report: report});
    }  catch(error) {
        res.status(500).json(error);
    }
}
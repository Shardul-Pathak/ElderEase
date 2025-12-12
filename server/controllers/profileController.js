import Users from '../models/user.js';

export async function getProfile (req,res) {
    const id = req.user.id;
    try {
        const user = await Users.findById(id);
        const data = {
            name: user.name,
            gender: user.gender,
            age: user.age,
            bio: user.bio,
            associatedElders: user.associatedElders
        }
        res.status(200).json({profile: data});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error});
    }
}

export async function updateProfile (req,res) {
    const id = req.user.id;
    const { name, gender, age, bio } = req.body;
    try {
        const user = await Users.findByIdAndUpdate(id, {
            name: name,
            gender: gender,
            age: age,
            bio: bio
        }, {new: true});
        res.status(200).json({message: "Success"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error});
    }
}

export async function getUsername (req,res) {
    const name = req.user.name;
    res.status(200).json({name: name});
}

export async function getUsernameCT (req,res) {
    const id = req.body.id;
    try {
        const user = await Users.findById(id) 
        res.status(200).json({name: user.name});
    } catch (error) {
        console.log(error);
    }
}

export async function updateCTProfile (req,res) {
    const id = req.user.id;
    const { name, gender, age, bio, associated } = req.body;
    const associatedUser = await Users.findOne({name: associated});
    try {
        const user = await Users.findByIdAndUpdate(id, {
            name: name,
            gender: gender,
            age: age,
            bio: bio,
            associatedElders: [associatedUser._id]
        }, {new: true});
        res.status(200).json({message: "Success"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error});
    }
}

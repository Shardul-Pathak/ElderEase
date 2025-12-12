import Contact from '../models/contact.js'

export async function add (req, res) {
    const id = req.user.id;
    try {
        const newContact = new Contact ({
            name: req.body.name,
            associated: id,
            relation: req.body.relationship,
            contact: req.body.phone
        });
        newContact.save(newContact);
        const allContacts = await Contact.find({associated: id});
        res.status(200).json({
            contacts: allContacts
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error});
    }
}

export async function getContacts (req, res) {
    const id = req.user.id;
    const allContacts = await Contact.find({associated: id});
    res.status(200).json({
        contacts: allContacts
    });
}
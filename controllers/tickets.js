const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

module.exports = {
    create,
    
}

async function create(req, res) {
    try {
        const createTicket = await Ticket.create(req.body);
        console.log(createTicket);
        res.redirect("/tickets/new");
    }   catch (err) {
        res.send(err);
    }
}
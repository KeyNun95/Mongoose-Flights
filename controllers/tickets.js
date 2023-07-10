const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

module.exports = {
    create,
    new: newTickets
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

async function newTickets (req, res) {
    try {
        const flightNum = await Flight.findOne({_id: req.params.id});
        res.render('tickets/new', {
            title: 'Add Ticket',
            flightNum,
        });
    } catch (err) {
        res.send(err);
    }
}
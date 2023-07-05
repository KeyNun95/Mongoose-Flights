const FlightModel = require('../models/flight');
//this is whats connected to my schema
module.exports = {
    index,
    show,
    new: newFlight,
    create
};

async function index(req, res) {
    const flights = await FlightModel.find({});
    console.log(flights);
    res.render('flights/index', {flights});
}

async function show(req, res) {
    const flight = await FlightModel.findById(req.params.id).sort({'destinations.arrival': 'desc'});
    console.log(flight);
    res.render('flights/show', { title: 'Destination Detail', flight});
}

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: '' });
}

async function create(req, res) {
    try{
        if (req.body['departs'] === '') delete req.body['departs'];
        //if my departs form stays empty if will delete empty space and take on the default
        await FlightModel.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        //if there is an error, an error message will display
        console.log(err);
        res.render('flights/new', { errorMsg: err.message});
    }
}
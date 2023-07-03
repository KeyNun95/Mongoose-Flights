const FlightModel = require('../models/flight');

module.exports = {
    create
};

async function create(req, res) {
    console.log(req.body)
    try {
        const flightsFromTheList = await FlightModel.findById(req.params.id)
        //await controls are only allowed in async functions
        flightsFromTheList.destinations.push(req.body);
        await flightsFromTheList.save();
        console.log(flightsFromTheList)
        res.redirect(`/flights/${req.params.id}`);
    } catch(err) {
        res.send(err)
    }
}
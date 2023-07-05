const FlightModel = require('../models/flight');
const flights = require('./flights');
//what is the purpose of this?

module.exports = {
    create
};

async function create(req, res) {
    console.log(req.body)
    try {
        const flightsFromTheList = await FlightModel.findById(req.params.id);
        //await controls are only allowed in async functions
        //await tells the 
        flightsFromTheList.destinations.push(req.body);
        // how do i sort this?!?!
        await flightsFromTheList.save();
        console.log(flightsFromTheList);
        res.redirect(`/flights/${req.params.id}`);  
    } catch(err) {
        res.send(err)
    };
}
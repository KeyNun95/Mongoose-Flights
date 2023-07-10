var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.post('/tickets/create', ticketsCtrl.create);

router.get('/flights/:id/tickets/new', ticketsCtrl.new);

module.exports = router;
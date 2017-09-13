var express = require('express');
var router = express.Router();
const userCntrl = require('../controllers/userController');
const eventCntrl = require('../controllers/eventController');
const Event = require('../models/Event');


router.get('/', eventCntrl.index);
router.post('/register', userCntrl.register);
router.post('/login', userCntrl.login);
router.post('/addEvent', eventCntrl.addEvent);

router.get('/events/list', eventCntrl.listEvents);
router.get('/events/edit/:id', eventCntrl.getEventToEdit);
router.post('/events/update/:id', eventCntrl.updateEvent);




module.exports = router;
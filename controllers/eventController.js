const mongoose = require('mongoose');
const User = require('../models/User');
const Event = require('../models/Event');
const jwt = require('jsonwebtoken');



exports.addEvent = (req, res) => {

    let decoded = jwt.decode(req.query.token);

    // req.body.author = decoded.user.username;
    // req.body.authorId = decoded.user._id;

    // console.log('body', req.body);
    // console.log('body event', req.body.event);

    let event = new Event({
        eventTitle: req.body.eventTitle,
        dateFrom: req.body.dateFrom,
        dateTo: req.body.dateTo,
        location: req.body.location,
        description: req.body.description,
        author: decoded.user.username,
        authorId: decoded.user._id
    });

    event.save((err, result) => {
        if (err) {
            return res.status(500).json({
                error: 'Error: ', err
            })
        }

        res.status(201).json({
            message: 'Event Saved',
            event: result
        });
    })
};


exports.index = (req, res) => {
    res.render('index');
};


exports.listEvents = (req, res) => {
    Event.find()
        .exec(function (err, events) {
            if (err) {
                res.status(500).json({
                    error: 'Error occurred'
                });
            }
            res.status(201).json({events})
        })
};


exports.getEventToEdit = (req, res) => {

    let eventId = req.params.id;

    Event.findOne({_id: eventId})
        .exec(function (err, event) {
            if (err) {
                res.status(500).json({
                    error: 'No event found'
                })
            }
            res.status(201).json({event})
        })

};


exports.updateEvent = (req, res) => {

    let eventId = req.params.id;

    Event.findOneAndUpdate({_id: eventId}, req.body,
        {new: true, runValidators: true})
        .exec(function (err, event) {
            if (err) {
                res.status(500).json({
                    error: 'No event found'
                })
            }

            event.save().then(event => {
                res.json('Update complete');
            })
        })


};

const mongoose = require('mongoose');
const User = require('../models/User');
var passport = require("passport");
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');



exports.register = (req, res) => {
    let user = new User(req.body);

    user.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                error: err
            })
        }
        res.status(201).json({
            message: 'User created',
        })
    })
};


exports.login = (req, res) => {


    User.findOne({username: req.body.username}, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            })
        }
        if (!user) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            })
        }

        if (req.body.password !== user.password) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }

        var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Sucesfuly logged in',
            token: token,
            userId: user._id,
            username: user.username
        })

    });

};







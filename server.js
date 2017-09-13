const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const index = require('./routes/index');
const mongoose = require('mongoose');
var session = require("express-session");
require('./models/User');
require('./models/Event');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user:password@ds135394.mlab.com:35394/event-app');


app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(cors());


app.use('/', index);

app.use(function(req, res, next) {
    return res.render('index');
});


const PORT = process.env.PORT || 7777;
 app.listen(PORT, function(){
    console.log('Listening on port ' + PORT);
});
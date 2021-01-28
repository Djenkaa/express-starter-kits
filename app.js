const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const sessionStore = require('session-file-store')(session);
const path = require('path');
const passport = require('passport');

const v1Routes = require('./routes/index')(express, passport);

const app = express();

// View engine
app.set('view engine', 'ejs');

//Logger
app.use(morgan('dev'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));

// Session
app.use(session({
    store: new sessionStore({
        path: path.join(__dirname, 'storage', 'sessions')
    }),
    secret: 'super secret',
    resave: false,
    saveUninitialized: true,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// V1 routes
app.use('/v1', v1Routes);


// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});


const port = process.env.port || 3000;

app.listen(port, ()=>{

    console.log('Server is running!');
});

module.exports = app;
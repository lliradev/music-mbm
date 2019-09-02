const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

// Initializations
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewars
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/songs', require('./routes/song.routes'));

// Store public
app.use('/uploads', express.static(path.resolve('uploads')));

module.exports = app;
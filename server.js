const express = require('express');
const app = express();
app.use(express.json());

// DB Connection
require('./connection');

// Cron
require('./cronjob/main');

// Stats
const stats = require('./controls/stats');
app.use('/api', stats);


app.listen('9090', () => console.log('Server started on port :9090'));
const express = require('express');
const app = express();

// DB Connection
require('./connection');

// Cron
require('./maincron');




app.listen('9090', () => console.log('Server started on port :9090'));
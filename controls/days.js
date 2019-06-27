const express = require('express');
const router = express.Router();
const Day = require('./../models/Day');

router.get('/days', (req, res) => {

    Day.find({}, (err, days) => {
        if (err) {
            res.status('500');
            res.json({error: 'Oops, something went wrong'})
        } else{
            res.status('200')
            res.json(days)
        }
    }).select('date day');  

})

module.exports = router;
const express = require('express');
const router = express.Router();
const Day = require('./../models/Day');

router.post('/stats', (req, res) => {

    Day.find({
        'date': {
            $in: req.body.dates
        }
    }, (err, foundDays) => {
        if (err) {
            res.status(500);
            res.json({
                error: 'Something went wrong while finding results'
            });
        } else if (!foundDays.length) {
            res.status(200);
            res.json({
                message: 'No results found'
            });
        } else if (foundDays.length) {
            formatResponse(foundDays);
        }
    })

    /**
     * Format the found days before sending back to client
     * @param {Array} days  Array of days to format
     */
    formatResponse = (days) => {

        let response = {
            overal: {
                total: 0,
                's200': {
                    count: 0,
                    percentage: 0
                },
                's400': {
                    count: 0,
                    percentage: 0
                },
                's401': {
                    count: 0,
                    percentage: 0
                },
                's403': {
                    count: 0,
                    percentage: 0
                },
                's500': {
                    count: 0,
                    percentage: 0
                },
                's501': {
                    count: 0,
                    percentage: 0
                },
                's502': {
                    count: 0,
                    percentage: 0
                },
                's503': {
                    count: 0,
                    percentage: 0
                }
            },
            days: []
        }

        // Loop over days
        for (let i = 0; i < days.length; i++) {

            let day = {
                day: days[i].day,
                date: days[i].date,
                data: {
                    total: 0,
                    's200': {
                        count: 0,
                        percentage: 0
                    },
                    's400': {
                        count: 0,
                        percentage: 0
                    },
                    's401': {
                        count: 0,
                        percentage: 0
                    },
                    's403': {
                        count: 0,
                        percentage: 0
                    },
                    's500': {
                        count: 0,
                        percentage: 0
                    },
                    's501': {
                        count: 0,
                        percentage: 0
                    },
                    's502': {
                        count: 0,
                        percentage: 0
                    },
                    's503': {
                        count: 0,
                        percentage: 0
                    }
                }
            }

            /**
             * This hurts my eyes but it does all the math
             */
            for (let j = 0; j < days[i].tests.length; j++) {
                if (days[i].tests[j].status === 200) {
                    response.overal.total += 1;
                    response.overal.s200.count += 1;
                    day.data.total += 1;
                    day.data.s200.count += 1;
                    response.overal.s200.percentage = response.overal.s200.count / response.overal.total * 100;
                    day.data.s200.percentage = day.data.s200.count / day.data.total * 100;
                } else if (days[i].tests[j].status === 400) {
                    response.overal.total += 1;
                    response.overal.s400.count += 1;
                    day.data.total += 1;
                    day.data.s400.count += 1;
                    response.overal.s400.percentage = response.overal.s400.count / response.overal.total * 100;
                    day.data.s400.percentage = day.data.s400.count / day.data.total * 100;
                } else if (days[i].tests[j].status === 401) {
                    response.overal.total += 1;
                    response.overal.s401.count += 1;
                    day.data.total += 1;
                    day.data.s401.count += 1;
                    response.overal.s401.percentage = response.overal.s401.count / response.overal.total * 100;
                    day.data.s401.percentage = day.data.s401.count / day.data.total * 100;
                } else if (days[i].tests[j].status === 403) {
                    response.overal.total += 1;
                    response.overal.s403.count += 1;
                    day.data.total += 1;
                    day.data.s403.count += 1;
                    response.overal.s403.percentage = response.overal.s403.count / response.overal.total * 100;
                    day.data.s403.percentage = day.data.s403.count / day.data.total * 100;
                } else if (days[i].tests[j].status === 500) {
                    response.overal.total += 1;
                    response.overal.s500.count += 1;
                    day.data.total += 1;
                    day.data.s500.count += 1;
                    response.overal.s500.percentage = response.overal.s500.count / response.overal.total * 100;
                    day.data.s500.percentage = day.data.s500.count / day.data.total * 100;
                } else if (days[i].tests[j].status === 501) {
                    response.overal.total += 1;
                    response.overal.s501.count += 1;
                    day.data.total += 1;
                    day.data.s501.count += 1;
                    response.overal.s501.percentage = response.overal.s501.count / response.overal.total * 100;
                    day.data.s501.percentage = day.data.s501.count / day.data.total * 100;
                } else if (days[i].tests[j].status === 502) {
                    response.overal.total += 1;
                    response.overal.s502.count += 1;
                    day.data.total += 1;
                    day.data.s502.count += 1;
                    response.overal.s502.percentage = response.overal.s502.count / response.overal.total * 100;
                    day.data.s502.percentage = day.data.s502.count / day.data.total * 100;
                } else if (days[i].tests[j].status === 503) {
                    response.overal.total += 1;
                    response.overal.s503.count += 1;
                    day.data.total += 1;
                    day.data.s503.count += 1;
                    response.overal.s503.percentage = response.overal.s503.count / response.overal.total * 100;
                    day.data.s503.percentage = day.data.s503.count / day.data.total * 100;
                }
            }
            response.days.push(day);
        }

        res.status(200);
        res.json(response);
    }
})

module.exports = router;
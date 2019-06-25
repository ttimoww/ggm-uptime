const cron = require('node-cron');
const fetch = require('node-fetch');
const Day = require('./models/Day');
/**
 * Pick random route of the Neatlynamed website
 */
const routePicker = () => {
    const routes = ['https://www.neatlynamed.com', 'https://www.neatlynamed.com/value-packs.html', 'https://www.neatlynamed.com/other-products.html', 'https://www.neatlynamed.com/clothing-labels.html', 'https://www.neatlynamed.com/safety.html', 'https://www.neatlynamed.com/for-grown-ups.html', 'https://www.neatlynamed.com/disney-name-labels.html', 'https://www.neatlynamed.com/disney-clothing-stickers.html', 'https://www.neatlynamed.com/name-tag.html', 'https://www.neatlynamed.com/mini-name-tag.html', 'https://www.neatlynamed.com/disney-baby-clothing-label.html', 'https://www.neatlynamed.com/disney-frozen-name-labels.html', 'https://www.neatlynamed.com/all-benefits', 'https://www.neatlynamed.com/terms_and_cond', 'https://www.neatlynamed.com/our-promises', 'https://www.neatlynamed.com/ourservice', 'https://www.neatlynamed.com/collaborations', 'https://www.neatlynamed.com/privacy-policy', 'https://www.neatlynamed.com/payment-cash-on-delivery', 'https://www.neatlynamed.com/faq-shipping', 'https://www.neatlynamed.com/usage-instructions', 'https://www.neatlynamed.com/safe-and-reliable', 'https://www.neatlynamed.com/delivered-in-your-mailbox/', 'https://www.neatlynamed.com/ironon-instructions-large', 'https://www.neatlynamed.com/photoexamples', 'https://www.neatlynamed.com/testimonials'];
    let random = Math.random();
    random = Math.floor(random * routes.length);
	return routes[random];
}

/**
 * Do an status check
 * @param {string} url Url to be testen
 */
let statusCheck = (url) => {
    fetch(url)
	.then(resp => saveCheck(url, resp))	
}

/**
 * Save the new check to the database
 * @param {String} url Url of the checked location
 * @param {Object} resp Response object from the check
 */
let saveCheck = (url, resp) => {
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const today = new Date();
    let day = weekdays[today.getDay() - 1];
	const date = today.toLocaleDateString();
    const time = today.toLocaleTimeString();

    console.log(`
    ==================================================================================   
    | Check on ${url} gave a response status of ${resp.status}
    | Made on ${day} (${date}) at ${time}
    ===================================================================================
    `);
 
    let check = {
        route: url,
        status: resp.status,
        time: time
    }
    Day.findOne({date: date}, (err, foundDay) => {
        if (foundDay){
            foundDay.tests.push(check);
            foundDay.save(foundDay);
        } else{
            const D1 = new Day({
                day: day,
                date: date,
                tests: [check]
            })

            D1.save((err, foundDay) => {
                if (err) throw err;
                console.log(`Saved new day: ${foundDay}`)
            })
        }
    })
}

/**
 * Setup the cron to run every x minutes
 */
let task = cron.schedule('* * * * *', () => {
	statusCheck(routePicker());
},{
	scheduled: false,
    timezone: "Europe/Amsterdam"
}); 
task.start();

module.exports = task;
# GGM Uptime 
---
## Summary
This repository contains an app to test the uptime of Neatlynamed. The uptime of Neatlynamed will be tested every minute and then persisted to a Mongo Database. The homepage of this app contains data about the requested days. (Screenshots)

---

## Installing
1. Run `git clone https://github.com/ttimoww/ggm-uptime` to clone this repository.
2. Run `npm install` & `npm run client-install` to install depencies.

---

## Quick start
``` bash

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Run the client & server 
npm run start

# Run the client & server wwith Sass compiling
npm run dev

# Server runs on http://localhost:9090 and client on http://localhost:3000
```

---

## Backend routes

### /api/stats (POST)
Returns the uptime data from the provided days

**Request body (required)** 
Example:
```
{
    dates: ['2019-6-27', '2019-6-26']
}
```

**Response body**
Example:
```
{
    overal: {
        total: 200,
        s200{
            count: 50,
            percentage: 50
        }
    },
    days: [{
        day: 'Thursday',
        date: '2019-6-27',
        data: {
            total: 100,
            s400: {
                count: 10,
                percentage: 20
            }
        }
    }]
}
```

---

## Used packages
...



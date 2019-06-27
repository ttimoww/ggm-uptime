# GGM Uptime 
---
## Summary
This repository contains an app to test the uptime of Neatlynamed. The uptime of Neatlynamed will be tested every minute and then persisted to a Mongo Database. The homepage of this app contains data about the requested days. (Screenshots)

---

## Installing
....

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



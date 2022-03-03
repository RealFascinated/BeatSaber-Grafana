const Express = require('express');
const path = require('path');
const apiMetrics = require('prometheus-api-metrics');

const Config = require('../config.json');
const app = Express();
app.set('view engine', 'ejs')

// Init metrics
app.use(apiMetrics());
require('./metrics/ScoreSaberMetrics')
console.log("Loaded metric handlers")

// Init fetchers
require('./data/ScoreSaber')
console.log("Loaded data fetchers")

app.listen(Config.port, () => {
    console.log(`Listening on http://localhost:${Config.port}`)
})
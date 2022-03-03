const Express = require('express');
const path = require('path');
const apiMetrics = require('prometheus-api-metrics');

const Config = require('../config.json');
const app = Express();
app.set('view engine', 'ejs')

app.use(apiMetrics());

// Init metrics
require('./metrics/ScoreSaberMetrics')

// Init fetchers
require('./data/ScoreSaber')

app.listen(Config.port, () => {
    console.log(`Listening on http://localhost:${Config.port}`)
})
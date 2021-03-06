const client = require('prom-client');
const ScoreSaberData = require('../data/ScoreSaber')

const registry = new client.Registry();

const scoresaberPP = new client.Gauge({
    name: 'scoresaber_pp',
    help: 'Scoresaber pp'
});
const scoresaberRank = new client.Gauge({
    name: 'scoresaber_rank',
    help: 'Scoresaber global rank'
});
const scoresaberCountryRank = new client.Gauge({
    name: 'scoresaber_country_rank',
    help: 'Scoresaber country rank'
});
const scoresaberTotalScore = new client.Gauge({
    name: 'scoresaber_total_score',
    help: 'Scoresaber total score'
});
const scoresaberTotalRankedScore = new client.Gauge({
    name: 'scoresaber_total_ranked_score',
    help: 'Scoresaber total ranked score'
});
const scoresaberAverageRankedAccuracy = new client.Gauge({
    name: 'scoresaber_average_ranked_accuracy',
    help: 'Scoresaber average ranked accuracy'
});
const scoresaberTotalPlayCount = new client.Gauge({
    name: 'scoresaber_total_play_count',
    help: 'Scoresaber total play count'
});
const scoresaberRankedPlayCount = new client.Gauge({
    name: 'scoresaber_ranked_play_count',
    help: 'Scoresaber ranked play count'
});
const scoresaberReplaysWatched = new client.Gauge({
    name: 'scoresaber_replays_watched',
    help: 'Scoresaber replays watched'
});
const scoresaberTimeFetched = new client.Gauge({
    name: 'scoresaber_time_fetched',
    help: 'Scoresaber time fetched'
});
registry.registerMetric(scoresaberPP);
registry.registerMetric(scoresaberRank);
registry.registerMetric(scoresaberCountryRank);
registry.registerMetric(scoresaberTotalScore);
registry.registerMetric(scoresaberTotalRankedScore);
registry.registerMetric(scoresaberAverageRankedAccuracy);
registry.registerMetric(scoresaberTotalPlayCount);
registry.registerMetric(scoresaberRankedPlayCount);
registry.registerMetric(scoresaberReplaysWatched);
registry.registerMetric(scoresaberTimeFetched);

update()
setInterval(async () => {
    update()
}, 60_000);

async function update() {
    await ScoreSaberData.updateData();
    const data = ScoreSaberData.getData();

    scoresaberPP.set(data.pp);
    scoresaberRank.set(data.rank);
    scoresaberCountryRank.set(data.country_rank);
    scoresaberTotalScore.set(data.total_score);
    scoresaberTotalRankedScore.set(data.total_ranked_score);
    scoresaberAverageRankedAccuracy.set(data.average_ranked_accuracy);
    scoresaberTotalPlayCount.set(data.total_play_count);
    scoresaberRankedPlayCount.set(data.ranked_play_count);
    scoresaberReplaysWatched.set(data.replays_watched);
    scoresaberTimeFetched.set(data.time_fetched);
}
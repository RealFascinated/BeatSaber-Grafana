const fetch = require('node-fetch');

let playerData = [];

const Config = require('../../config.json');
const scoresaberUrl = `https://scoresaber.com/api/player/${Config.scoresaberId}/full`;
const url = Config.proxy.enabled ? Config.proxy.url + scoresaberUrl : scoresaberUrl

async function fetchData() {
    const data = await fetch(url);
    const json = await data.json();

    playerData = {
        pp:                       json.pp, 
        rank:                     json.rank,
        country_rank:             json.countryRank,
        total_score:              json.scoreStats.totalScore,
        total_ranked_score:       json.scoreStats.totalRankedScore,
        average_ranked_accuracy:  json.scoreStats.averageRankedAccuracy,
        total_play_count:         json.scoreStats.totalPlayCount,
        ranked_play_count:        json.scoreStats.rankedPlayCount,
        replays_watched:          json.scoreStats.replaysWatched,
    };
    console.log("Data Fetcher - Updated scoresaber metrics.")
}

fetchData();

module.exports = {
    getData() {
        return playerData;
    },

    async updateData() {
        await fetchData()
    }
}
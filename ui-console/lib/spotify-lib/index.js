const Albums = require("./albums/albums");
const Artists = require("../artists-lib/artists");
const Songs = require("./songs/songs");

class SpotifyService {
    #baseUrl;
    /** * @param {String} baseUrl  */
    constructor (baseUrl = process.env.SPOTIFY_SERVICE_URL) {
        this.#baseUrl = baseUrl; 
    }

    albums = () => new Albums(this.#baseUrl);
    artists = () => new Artists(this.#baseUrl);
    songs = () => new Songs(this.#baseUrl);
}

module.exports = SpotifyService;
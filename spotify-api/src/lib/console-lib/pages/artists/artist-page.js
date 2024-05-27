const { searchArtist } = require("../../../spotify-lib/endpoints/artists");
const inquirer = require("inquirer");
const albumPage = require("../albums/album-page");
const albumsPage = require("../albums/albums-page");
const songsPage = require("../songs/songs-page");

const artistPage = (artistID) => () => {
    console.clear();
    searchArtist(artistID).then((artist) => {
        console.table(
            [artist].map((artist) => ({
                "Artist Name": artist.name,
                Link: artist.external_urls.spotify || "",
                Genres: artist.genres.join(", "),
                Popularity: artist.popularity,
                Followers: artist.followers.total || 0,
            }))
        );
        const options = {
            type: "list",
            name: "choice",
            loop: false,
            message: "Choose an option:",
            choices: [
                {
                    name: "albums",
                    value: albumsPage(artist.id),
                },
                {
                    name: "songs",
                    value: songsPage(artist.id),
                },
            ],
        };

        inquirer
            .prompt(options)
            .then((answer) => {
                answer.choice();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
};

module.exports = artistPage;

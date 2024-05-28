const inquirer = require("inquirer");
const chalk = require("chalk");
const artistSongsPage = require("../songs/artist-songs-page");
const artistAlbumsPage = require("../albums/artist-albums-page");
const { searchArtist } = require("../../../spotify-lib/endpoints/artists");

/**
 * **Function that renders a page to navigate to an artists albums or songs.**
 *
 * @param {String} artistID **Used to search API for an artist with the same ID.**.
 * @param {() => void} back **When a user wants to navigate back the function will callback this function**.
 *
 */
const artistPage = (artistID, back) => () => {
    console.clear();
    console.log(chalk.bgWhite.bold.black("ARTIST PROFILE"));
    searchArtist(artistID).then((artist) => {
        console.table(
            [artist].map((artist) => ({
                "Artist Name": artist.name,
                Link: artist.external_urls?.spotify || "",
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
                    value: artistAlbumsPage(artist, artistPage(artistID, back)),
                },
                {
                    name: "songs",
                    value: artistSongsPage(artist, artistPage(artistID, back)),
                },
                {
                    name: chalk.red("Go Back"),
                    value: back,
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

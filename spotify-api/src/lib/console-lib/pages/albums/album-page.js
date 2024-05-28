const {
    getAlbumInformation,
} = require("../../../spotify-lib/endpoints/albums");
const inquirer = require("inquirer");
const songPage = require("../songs/song-page");
const chalk = require("chalk");

/**
 * **Function that renders a page to navigate album songs as well as view some basic information about an album.**
 *
 * @param {String} albumID **Used to search API for an album with the same ID.**.
 * @param {() => void} back **When a user wants to navigate back the function will callback this function**.
 *
 */
const albumPage = (albumID, back) => () => {
    console.clear();
    console.log(chalk.bgWhite.bold.black("ALBUM DETAILS"));
    getAlbumInformation(albumID).then((album) => {
        console.table(
            [album].map((album) => ({
                "Album Name": album.name,
                Link: album.external_urls?.spotify || "",
                Artists: album.artists.map((artist) => artist.name).join(", "),
                Label: album.label,
                "Release Date": album.release_date,
                Popularity: album.popularity,
                "Total Tracks": album.total_tracks,
            }))
        );

        console.log(chalk.bold("Songs:"));
        const options = {
            type: "list",
            name: "choice",
            loop: false,
            message: "Choose an option:",
            choices: [
                ...album.tracks.items.map((track) => ({
                    name: `${track.name}`,
                    value: songPage(track.id, albumPage(albumID, back)),
                })),
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

module.exports = albumPage;

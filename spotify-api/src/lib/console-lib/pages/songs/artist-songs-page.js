const inquirer = require("inquirer");
const songPage = require("./song-page");
const chalk = require("chalk");
const { getArtistSongs } = require("../../../spotify-lib/endpoints/songs");

/**
 * **Function that renders page displaying songs related to an artist.**
 *
 * @param {Object} artist **Used to access artist details to search for songs and display minimal information.**.
 * @param {() => void} back **When a user wants to navigate back the function will callback this function**.
 *
 */
const artistSongsPage = (artist, back) => () => {
    console.clear();
    console.log(chalk.bold.underline(`${artist.name}'s Songs:`));
    getArtistSongs(artist.id).then((songs) => {
        const options = {
            type: "list",
            name: "choice",
            loop: false,
            message: "Choose an option:",
            choices: [
                ...songs.map((track) => ({
                    name: `${track.name}`,
                    value: songPage(track.id, artistSongsPage(artist, back)),
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

module.exports = artistSongsPage;

const { getSongInformation } = require("../../../spotify-lib/endpoints/songs");
const inquirer = require("inquirer");
const chalk = require("chalk");

/**
 * **Function that renders page displaying details of a song.**
 *
 * @param {String} songID **Used to search API for a song with the same ID.**.
 * @param {() => void} back **When a user wants to navigate back the function will callback this function**.
 * @returns
 */
const songPage = (songID, back) => () => {
    console.clear();
    console.log(chalk.bgWhite.bold.black("SONG DETAILS"));
    getSongInformation(songID).then((song) => {
        console.table(
            [song].map((song) => ({
                "Song Name": song.name,
                Link: song.external_urls?.spotify || "",
                Artists: song.artists.map((artist) => artist.name).join(", "),
                Label: song.label,
                "Release Date": song.release_date,
                Popularity: song.popularity,
                Duration: song.duration_ms,
            }))
        );

        const options = {
            type: "list",
            name: "choice",
            loop: false,
            message: "Choose an option:",
            choices: [
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

module.exports = songPage;

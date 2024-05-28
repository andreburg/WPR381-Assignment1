const inquirer = require("inquirer");
const songPage = require("./song-page");
const chalk = require("chalk");
const { searchSongs } = require("../../../spotify-lib/endpoints/songs");

/**
 * **Function that renders page displaying songs related to a text.**
 *
 * @param {String} name **Used to search API for songs.**.
 * @param {() => void} back **When a user wants to navigate back the function will callback this function**.
 *
 */
const songsPage = (name, back) => () => {
    console.clear();
    console.log(chalk.bold.underline(`Songs related to "${name}":`));
    searchSongs(name).then((songs) => {
        const options = {
            type: "list",
            name: "choice",
            loop: false,
            message: "Choose an option:",
            choices: [
                ...songs.map((track) => ({
                    name: `${track.name}`,
                    value: songPage(track.id, songsPage(name, back)),
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

module.exports = songsPage;

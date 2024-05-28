const inquirer = require("inquirer");
const chalk = require("chalk");
const { searchArtists } = require("../../../spotify-lib/endpoints/artists");
const artistPage = require("./artist-page");

/**
 * **Function that renders page displaying artists that are related to an input text.**
 *
 * @param {String} name **Used to search API for artists.**.
 * @param {() => void} back **When a user wants to navigate back the function will callback this function**.
 *
 */
const artistsPage = (name, back) => () => {
    console.clear();
    console.log(chalk.bold.underline(`Artists related to "${name}":`));
    searchArtists(name).then((artists) => {
        const options = {
            type: "list",
            name: "choice",
            loop: false,
            message: "Choose an option:",
            choices: [
                ...artists.map((artist) => ({
                    name: `${artist.name}`,
                    value: artistPage(artist.id, artistsPage(name, back)),
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

module.exports = {
    artistsPage,
};

const { searchAlbums } = require("../../../spotify-lib/endpoints/albums");
const inquirer = require("inquirer");
const albumPage = require("./album-page");
const chalk = require("chalk");

/**
 * **Function that renders page displaying albums that are related to an input text.**
 *
 * @param {String} name **Used to search API for albums.**.
 * @param {() => void} back **When a user wants to navigate back the function will callback this function**.
 *
 */
const albumsPage = (name, back) => () => {
    console.clear();
    console.log(chalk.bold.underline(`Albums related to "${name}":`));
    searchAlbums(name).then((albums) => {
        const options = {
            type: "list",
            loop: false,
            name: "choice",
            message: "Choose an option:",
            choices: [
                ...albums.map((album) => ({
                    name: `${album.name}`,
                    value: albumPage(album.id, albumsPage(name, back)),
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

module.exports = albumsPage;

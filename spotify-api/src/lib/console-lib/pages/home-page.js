const inquirer = require("inquirer");
const chalk = require("chalk");
const { artistsPage } = require("./artists/artists-page");
const searchPage = require("./search-page");

const homePage = () => () => {
    console.clear();
    const options = {
        type: "list",
        name: "choice",
        message: "Choose an option:",
        choices: [
            {
                name: "Trending Artists",
                value: artistsPage("__default__"),
            },
            {
                name: "Search Artists",
                value: searchPage(
                    "Artist Explorer",
                    "Search for a artist...",
                    homePage(),
                    artistsPage
                ),
            },
        ],
    };

    console.log("Welcome to Spotify Explorer!");
    console.log("We are here to help you explore artists...");

    inquirer
        .prompt(options)
        .then((answer) => {
            answer.choice();
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

module.exports = {
    homePage,
};

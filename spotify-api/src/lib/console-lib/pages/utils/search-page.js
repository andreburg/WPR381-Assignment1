const chalk = require("chalk");
const inquirer = require("inquirer");

/**
 *
 * @param {String} title  **Used to display a title**.
 * @param {String} heading **Used to display a heading**.
 * @param {() => void} back **When a user wants to navigate back the function will callback this function**.
 * @param {() => void} next **This will be used as a callback function to send the text to**.
 * @returns
 */
const searchPage = (title, heading, back, next) => () => {
    console.clear();
    console.log(chalk.bold(title));
    console.log(chalk.green(heading));
    inquirer
        .prompt([
            {
                type: "input",
                name: "searchQuery",
                message: 'Type to search (type "back" to go back):',
                filter: function (input) {
                    if (input.toLowerCase() === "back") {
                        return "__back__";
                    }
                    return input;
                },
            },
        ])
        .then(async (answer) => {
            if (answer.searchQuery === "__back__") {
                console.log("Going back...");
                back();
            } else {
                next(
                    answer.searchQuery,
                    searchPage(title, heading, back, next)
                )();
            }
        });
};

module.exports = searchPage;

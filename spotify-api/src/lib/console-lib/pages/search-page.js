const chalk = require("chalk");
const inquirer = require("inquirer");

const searchPage = (title, heading, back, next) => () => {
    console.clear();
    console.log(chalk.green(title));
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
        .then((answer) => {
            if (answer.searchQuery === "__back__") {
                console.log("Going back...");
                back();
            } else {
                next(answer.searchQuery)();
            }
        });
};

module.exports = searchPage;

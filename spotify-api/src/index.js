// Pull in all of our environment variables allowing us to keep our secrets secure.
require("dotenv").config();
const { homePage } = require("./lib/console-lib/pages/home-page.js");

/*
    The pages are setup in a normalized way where the functions return functions, 
    allowing us to pass parameters down from the higher order functions for easier manipulation of the actions of the functions.
*/
// Invoke "Home Page" as soon as app runs...
homePage()();

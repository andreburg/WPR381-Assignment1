require("dotenv").config();
const express = require("express");
const indexRouter = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const { homePage } = require("./lib/console-lib/pages/home-page");

const app = express();
PORT = process.env.PORT || 9977;

app.set("view engine", "ejs");

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// for all routes "/*" we will use this router.
app.use(indexRouter);

app.listen(PORT, () => {
    // Run Console App()
    console.log(`Listening on http://localhost:${PORT}.`);
    homePage()();
});

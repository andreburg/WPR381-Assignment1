require('dotenv').config();
const express = require('express');
const indexRouter = require('./routes');
const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();
PORT = process.env.PORT || 9977;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));
app.use(indexRouter);

// app.use((req, res, next) => {
//     console.log(`Received request: ${req.method} ${req.url}`);
//     console.log('Request body:', req.body);
//     console.log('Request params:', req.params);
//     console.log('Request query:', req.query);
//     next();
// });

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}.`)
});
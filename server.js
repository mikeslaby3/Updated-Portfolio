const express = require('express');
const PORT = process.env.PORT || 8050;

const app = express();

const db = require('./models');
const nodemailer = require('nodemailer');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
    });
});
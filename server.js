//run sequelize init:models & sequelize init:config
const express = require('express');
const PORT = process.env.PORT || 8050;

const app = express();

const db = require('./models');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/routeName')(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log('App listening on PORT ' + PORT);
    });
});
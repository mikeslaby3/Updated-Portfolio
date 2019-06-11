const db = require("../models");

module.exports = function (app) {

    app.post("/api/contact", function (req, res) {
        console.log('New Contact:')
        console.log(req.body);

        db.Contact.create({
            name: req.body.name,
            last_name: req.body.last_name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
        }).then(function (dbContact) {
            res.json(dbContact);
        });

    });

}

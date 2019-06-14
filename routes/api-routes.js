const db = require("../models");
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mikenodemailer@gmail.com',
        pass: 'n0dep@ssword18'
    }
});

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
        
        let mailOptions = {
            from: 'mikenodemailer@gmail.com',
            to: 'mikeslaby3@gmail.com',
            subject: "MJS Web Dev: New message from " + req.body.name,
            text: 'New Contact',
            html: '<p>Name: ' + req.body.name + 
            '</p><p>Last Name: ' + req.body.last_name + 
            '</p><p>Email: ' + req.body.email + 
            '</p><p>Subject: ' + req.body.subject + 
            '</p><p>Message: ' + req.body.message + '</p>'
        };
        
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

    });

}

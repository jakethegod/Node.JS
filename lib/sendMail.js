'use strict';

const nodemailer = require('nodemailer');
const Config = require('../Config.json');

let mailer = function (args, opt, callback) {
    let transporter = nodemailer.createTransport({
        service: Config.Mail.Service,
        auth: {
            user: Config.Mail.Login,
            pass: Config.Mail.Password
        }
    });

    let mailOptions = {
        from: `${Config.Mail.FromName}<${Config.Mail.FromMail}>`,
        to: args.ToMail,
        subject: args.subjTest,
        html: `<b>${args.messTest}</b>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            callback(null, error)
        }
        callback(null, info.response)
    })
};

module.exports.mailer = mailer;
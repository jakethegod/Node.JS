'use strict';

const Config = require('../Config');
const db = require('couchdb-promises')({
    baseUrl: Config.CouchDB.Cluster[0],
    requestTimeout: 10000
});

const usersBase = Config.CouchDB.Bases.Users;

let addUser = function (args, opt, callback) {
    db.createDocument(usersBase, {
        "FirstName": args.firstName,
        "LastName": args.lastName,
        "Email": args.email,
        "Prone": args.phone
    }, args.login)
        .then(response => callback(null, response.data))
};

module.exports.addUser = addUser;

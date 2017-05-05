'use strict';

const Config = require('../Config');
const db = require('couchdb-promises')({
    baseUrl: Config.CouchDB.Cluster[0],
    requestTimeout: 10000
});

const usersBase = Config.CouchDB.Bases.Users;

let addUser = function (args, opt, callback) {
    console.log (args)
    db.createDocument(usersBase, {
        "FirstName": opt.firstName,
        "LastName": opt.lastName,
        "Email": opt.email,
        "Phone": opt.phone
    }, opt.login)
        .then(response => callback(null, response.data))
        .catch(response => callback (null, response))

};



addUser('api.addUser', {
    "login": "k.kekergfffgf",
    "firstName": "Kirill",
    "lastName": "Keker",
    "email": "k.keker@globus-ltd.com",
    "phone": "+79683846538"
}, function (err, result) {
    console.log(result)
});
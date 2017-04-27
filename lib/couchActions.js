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


let createBase = function (arg,opt, callback) {
    db.createDatabase (arg.baseName)
        .then(response => callback(null, response))
};


let getBaseHead = function (arg,opt, callback) {
    db.getDatabaseHead (arg.baseName)
        .then(response => callback(null, response))
        .catch(response => callback (null, response.status))
};


let createBaseIf = function (args,opt, callback) {
    let myBase = args.baseName;
    db.getDatabaseHead (myBase)
        .then(response => callback(null, "Base already exist"))
        .catch(response => {
            if (response.status === 404) {

                return db.createDatabase (myBase)
                    .then(response => callback(null, response))
            } else {
                // real error
                return Promise.reject(response)
            }
        })
}

let addUserIf = function (args, opt, callback) {
    db.getDocument(usersBase, args.login)
        .then(response => callback(null, "User already exist"))
        .catch(response => {
            if (response.status === 404) {

                return db.createDocument(usersBase, {
                    "FirstName": args.firstName,
                    "LastName": args.lastName,
                    "Email": args.email,
                    "Prone": args.phone
                }, args.login)
                    .then(response => callback(null, response.data))
            } else {
                // real error
                return Promise.reject(response)
            }
        })
}



let getDocIf = function (args,opt, callback) {
    let myLogin = args.login;

    db.getDocument(usersBase, args.login)
        .then(response => callback(null, response.status))
        .catch(response => callback (null, console.log("This user does not exist"+myLogin)))
}




module.exports = addUser;
module.exports = createBase;
module.exports = getBaseHead;

module.exports = getDocIf;
module.exports = addUserIf;
module.exports = createBaseIf;
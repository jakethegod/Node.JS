'use strict';

'use strict';
const Config = require('../Config');
const db = require('couchdb-promises')({
    baseUrl: Config.CouchDB.Cluster[0],
    requestTimeout: 10000
});
const usersBase = Config.CouchDB.Bases.Users;


class couchActions


{

    addUser  (args, opt, callback) {
    db.createDocument(usersBase, {
        "FirstName": args.firstName,
        "LastName": args.lastName,
        "Email": args.email,
        "Prone": args.phone
    }, args.login)
        .then(response => callback(null, response.data))
};



    createBase  (arg,opt, callback) {
    db.createDatabase (arg.baseName)
        .then(response => callback(null, response))
};



    getBaseHead (arg,opt, callback) {
    db.getDatabaseHead (arg.baseName)
        .then(response => callback(null, response))
        .catch(response => callback (null, response.status))
};


    createBaseIf  (args,opt, callback) {
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
    addUserIf  (args, opt, callback) {
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
    getDocIf  (args,opt, callback) {
    let myLogin = args.login;
    db.getDocument(usersBase, args.login)
        .then(response => callback(null, response.data))
        .catch(response => callback (null, console.log("This user does not exist"+myLogin)))
}

}


module.exports = new couchActions ()



/*



    module.exports.addUser = addUser;
module.exports.createBase = createBase;
module.exports.getBaseHead = getBaseHead;
module.exports.getDocIf = getDocIf;
module.exports.addUserIf = addUserIf;
module.exports.createBaseIf = createBaseIf;
*/
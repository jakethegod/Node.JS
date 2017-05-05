const Config = require('../Config');
const db = require('couchdb-promises')({
    baseUrl: Config.CouchDB.Cluster[0],
    requestTimeout: 10000
});
const usersBase = Config.CouchDB.Bases.Users;
const testBase = Config.CouchDB.Bases.Test;



function couchCreateBase(baseName) {
    db.createDatabase(baseName)
        .then(response => console.dir(response.data));
}
function couchGetInfo() {
    db.getInfo()
        .then(response => console.dir(response.data));
}
function couchGetBaseHead(baseName) {
    db.getDatabaseHead(baseName)
        .then(response => console.dir(response.data));
}
function couchGetDocHead(baseName, docId) {
    db.getDocumentHead(baseName, docId)
        .then(response => console.dir(response.data))
}
function couchListBases() {
    db.listDatabases()
        .then(response => console.dir(response.data))
}
function couchCreateDocument(baseName, docJson, docId) {
    db.createDocument(baseName, docJson, docId)
        .then(response => console.dir(response.data))
}
function couchGetDoc(baseName, docId) {
    db.getDocument(baseName, docId)
        .then(response => console.dir(response.data))
}
function couchGetAllDoc(baseName) {
    db.getAllDocuments(baseName, {
        descending: true,
        include_docs: true
    })
        .then(response => console.dir(response.data))
}
function couchDelDoc(baseName, docId, docRevision) {
    db.deleteDocument(baseName, docId, docRevision)
        .then(response => console.dir(response.data))
}
function couchCopyDoc(baseName, originDoc, copyDoc) {
    db.copyDocument(baseName, originDoc, copyDoc)
        .then(response => console.dir(response.data))
}
function couchDelBase(baseName) {
    db.deleteDatabase(baseName)
        .then(response => console.dir(response.data))
}
couchGetAllDoc(usersBase);
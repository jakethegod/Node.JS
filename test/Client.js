'use strict';

const rpc = require('json-rpc2');
const Config = require('../Config');

const client = rpc.Client.$create(Config.Web.ListenPort, Config.Web.ListenAddr);

client.call('api.addUser', {
    "login": "k.keker",
    "firstName": "Kirill",
    "lastName": "Keker",
    "email": "k.keker@globus-ltd.com",
    "phone": "+79683846538"
}, function (err, result) {
    console.log(result)
});

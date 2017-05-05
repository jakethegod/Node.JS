'use strict';
const rpc = require('json-rpc2');
const Config = require('../Config');
const client = rpc.Client.$create(Config.Web.ListenPort, Config.Web.ListenAddr);

client.call('api.getDocIf', {
        "login": "k.kekerd",
        "baseName": "users"
    },
    function (err, result) {
        console.dir(result)
    });



/*


 client.call('api.createBaseIf', {"baseName": "userss"},
 function (err, result) {
 console.dir(result)
 });

 client.call('api.addUserIf', {
 "login": "k.keker1",
 "firstName": "Kirill",
 "lastName": "Keker",
 "email": "k.keker@globus-ltd.com",
 "phone": "+79683846538"
 },


 function (err, result) {
 console.dir(result)
 }); */
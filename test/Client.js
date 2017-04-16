const rpc = require('json-rpc2')
const Config = require('../Config')

const client = rpc.Client.$create(Config.Web.ListenPort, Config.Web.ListenAddr)

client.call('mail.send', {
    "ToMail": "k.keker@me.com",
    "subjTest": "Test Message",
    "messTest": "Message"
}, function (err, result) {
    console.log(result)
})
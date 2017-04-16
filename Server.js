'use strict';

const rpc = require('json-rpc2');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const Mailer = require('./lib/sendMail');
const Config = require('./Config');

let sendMail = Mailer.mailer;

function echo(args, opt, callback) {
    callback(null, args)
}

let server = rpc.Server.$create({
    'websocket': true,
    'headers': {
        'Access-Control-Allow-Origin': '*'
    }
});

server.expose('basic', {
    'echo': echo
});

server.expose('mail', {
    'send': sendMail
});

if (cluster.isMaster) {

    console.log(`Master ${process.pid} started on http://${Config.Web.ListenAddr}:${Config.Web.ListenPort}`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`)
    })

} else {

    server.listen(Config.Web.ListenPort, Config.Web.ListenAddr);
    console.log(`Worker ${process.pid} started`)
}

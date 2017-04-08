const rpc = require('json-rpc2')
const cluster = require('cluster')
const numCPUs = require('os').cpus().length

if (cluster.isMaster) {

    console.log(`Master ${process.pid} is running`)
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`)
    })

} else {

    var server = rpc.Server.$create({
        'websocket': true,
        'headers': {
            'Access-Control-Allow-Origin': '*'
        }
    })

    function add(args, opt, callback) {
        callback(null, args[0] + args[1])
    }

    server.expose('add', add)
    server.listen(8000, 'localhost')

    console.log(`Worker ${process.pid} started on http://localhost:8000/`)
}
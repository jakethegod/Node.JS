const rpc = require('json-rpc2')

var server = rpc.Server.$create({
    'websocket': true,
    'headers': {
        'Access-Control-Allow-Origin': '*'
    }
})

function sum(args, opt, callback) {
    callback(null, args[0] + args[1])
}

function echo(args, opt, callback) {
    callback(null, args)
}

server.expose('basicTasks', {
        'sum': sum,
        'echo': echo
})

server.listen(8000, 'localhost')
console.log("Server started on http://localhost:8000/")
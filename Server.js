const rpc = require('json-rpc2')

var server = rpc.Server.$create({
    'websocket': true,
    'headers': {
        'Access-Control-Allow-Origin': '*'
    }
})

function add(args, opt, callback) {
    callback(null, args[0] + args[1])
}

function task1(args, opt, callback) {
    callback(null, args[0] + ' ' + args[1] + ' ' + 'лет')
}

function echo(args, opt, callback) {
    callback(null, args)
}

server.expose('basicTasks', {
        'add': add,
        'task1': task1
})
server.expose('debug', {
        'echo': echo
})

server.listen(8000, 'localhost')

console.log("Server started on http://localhost:8000/")
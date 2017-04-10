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
function task1Korolev(args, opt, callback) {
    callback(null, args[0] + ' ' + args[1] + ' year old.')
}

server.expose('add', add)
server.expose('tasks', {
    'task1Korolev1': task1Korolev
})

server.listen(8000, 'localhost')

console.log("Server started on http://localhost:8000/")
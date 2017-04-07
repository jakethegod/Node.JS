rpc = require('json-rpc2')
server = rpc.Server.$create(
  'websocket': true
  'headers':
    'Access-Control-Allow-Origin': '*')

add = (args, opt, callback) ->
  callback null, args[0] + args[1]
  return

server.expose 'add', add
server.listen 8000, 'localhost'

console.log 'Server is started on http://localhost:8000/'
rpc = require('json-rpc2')
client = rpc.Client.$create(8000, 'localhost')
client.call 'add', [
  1
  2
], (err, result) ->
  console.log '1 + 2 = ' + result
  return
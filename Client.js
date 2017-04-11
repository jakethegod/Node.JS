const rpc = require('json-rpc2')
const client = rpc.Client.$create(8000, 'localhost')

client.call('basicTasks.sum', [23, 10], function (err, result) {
    console.log('Результат: ' + result)
})
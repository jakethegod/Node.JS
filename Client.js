const rpc = require('json-rpc2')
const client = rpc.Client.$create(8000, 'localhost')

client.call('basicTasks.task1', ["Жене", 10], function (err, result) {
    console.log('Результат: ' + result)
})
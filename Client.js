const rpc = require('json-rpc2')
const client = rpc.Client.$create(8000, 'localhost')

client.call('tasks.task1Korolev', ["Андрею", 31], function (err, result) {
    console.log('Результат: ' + result)
})
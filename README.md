Это проект для изучения написания API на Node.JS с использованием JSON-RPC 2
==

**Установка:**

    git clone https://gitlab.globus-ltd.com/k.keker/Interns-NodeJS-API.git - копирование кода проекта
    cd Interns-NodeJS-API
    npm install - установка зависимостей
    npm start - запуск сервера
    npm test - запуск клиента для тестирования

**Дополнительные материалы:**
- Спецификация [JSON-RPC 2](http://www.jsonrpc.org/specification)
- Описание из [Wikipedia](https://ru.wikipedia.org/wiki/JSON-RPC)
- Описание используемого пакета [json-rpc2](https://github.com/pocesar/node-jsonrpc2) 

Проект в [Redmine](https://redmine.globus-ltd.com/issues/27940) 

**Заголовки запроса:**
```sh
Content-Type: application/json
Accept: application/json
```

**Пример [POST-запроса](http://take.ms/sBe99):**
```sh
{
    "jsonrpc": "2.0",
    "method": "add",
    "params": [1,2],
    "id": 1
}
```
**Пример [ответа](http://take.ms/jY7KZ):**
```sh
{
    "jsonrpc": "2.0",
    "result": 3,
    "id": 1
}
```

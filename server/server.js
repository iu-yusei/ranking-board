const ws = require('ws').Server;
const wsServer = new ws({ port: 5001 });

wsServer.on('connection', server => {
  server.on('message', message => {
    wsServer.clients.forEach(client => {
      client.send(message);
    });
  });
});

console.log('ranking_ws起動中...');


//点数表示用
const resultPage = new ws({ port: 5002 });

resultPage.on('connection', server => {
  server.on('message', message => {
    resultPage.clients.forEach(client => {
      client.send(message);
    });
  });
});

console.log('resultPg_ws起動中...');
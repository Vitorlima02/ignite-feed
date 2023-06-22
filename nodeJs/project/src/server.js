import http from 'node:http';

const server = http.createServer((req, res) => {
  return res.end('HELLO World');
});

server.listen(3333);
import http from 'node:http';
import { randomUUID } from 'node:crypto';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR/index.js';

const tasks = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/tasks') {
    return res
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(tasks));
  }

  const date = new Date();
  const formatDate = format(date, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  if (method === 'POST' && url === '/tasks') {
    tasks.push({
      id: randomUUID(),
      title: 'Fazer exame',
      description: 'Realizar exame de laboratorio',
      completed_at: null,
      created_at: formatDate,
      update_at: null,
    })
    console.log(tasks);
    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
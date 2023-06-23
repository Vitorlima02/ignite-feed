import http from 'node:http';
import { randomUUID } from 'node:crypto';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR/index.js';
import { json } from './middleware/json.js';
import { Database } from './middleware/database.js';

const database = new Database();

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  if (method === 'GET' && url === '/tasks') {
    const tasks = database.select('tasks');
    
    return res.end(JSON.stringify(tasks));
  }

  const date = new Date();
  const formatDate = format(date, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  if (method === 'POST' && url === '/tasks') {
    const { title, description } = req.body;
    const tasks = {
      id: randomUUID(),
      title,
      description,
      completed_at: null,
      created_at: formatDate,
      update_at: null,
    }
    
    database.insert('tasks', tasks)

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
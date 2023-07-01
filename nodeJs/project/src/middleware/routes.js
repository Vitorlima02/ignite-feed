import { randomUUID } from 'node:crypto';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR/index.js';
import { Database } from './database.js';


const database = new Database();

const date = new Date();
const formatDate = format(date, "d 'de' LLLL 'às' HH:mm'h'", {
  locale: ptBR
})

export const routes = [
  {
    method: 'GET',
    path: '/tasks',
    handler: (req, res) => {
      const tasks = database.select('tasks');
    
      return res.end(JSON.stringify(tasks));
    }
  },
  {
    method: 'POST',
    path: '/tasks',
    handler: (req, res) => {
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
  }
]
import { randomUUID } from 'node:crypto';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR/index.js';
import { Database } from '../src/middleware/database.js';
import { BuildRoutePath } from './utilities/build-route-path.js';


const database = new Database();

const date = new Date();
const formatDate = format(date, "d 'de' LLLL 'às' HH:mm'h'", {
  locale: ptBR
})

export const routes = [
  {
    method: 'GET',
    path: BuildRoutePath('/tasks'),
    handler: (req, res) => {
      const tasks = database.select('tasks');
    
      return res.end(JSON.stringify(tasks));
    }
  },
  {
    method: 'POST',
    path: BuildRoutePath('/tasks'),
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
  },
  {
    method: 'PUT',
    path: BuildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params;
      const { title, description } = req.body;

      database.update('tasks', id, {
        title,
        description,
        update_at: formatDate,
      });
      
      return res.writeHead(201).end();
    }
  },
  {
    method: 'PATCH',
    path: BuildRoutePath('/tasks/:id/complete'),
    handler: (req, res) => {
      const { id } = req.params;

      database.completeTask('tasks', id, {
        completed_at: formatDate,
      });
      
      return res.writeHead(201).end();
    }
  },
  {
    method: 'DELETE',
    path: BuildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params;

      database.delete('tasks', id);
      
      return res.writeHead(201).end();
    }
  }
]
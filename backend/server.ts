import express, { Request, Response } from 'express';
// Simple Task API Interface
interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

const app = express();
app.use(express.json());

const tasks: Task[] = [];

// Endpoint to retrieve tasks
app.get('/api/tasks', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: tasks,
    timestamp: new Date()
  });
});

// Endpoint to create a task
app.post('/api/tasks', (req: Request, res: Response) => {
  const { title } = req.body;
  const newTask: Task = {
    id: tasks.length + 1,
    title,
    isCompleted: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

export default app;

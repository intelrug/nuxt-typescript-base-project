import { Router, Request, Response } from 'express';

const router = Router();

const users = [
  { name: 'Nikita' },
  { name: 'Artem' },
  { name: 'Andrey' },
];

router.get('/users', (req: Request, res: Response, next) => {
  res.json(users);
});

router.get('/users/:id', (req: Request, res: Response, next) => {
  const id = parseInt(req.params.id, 10);
  if (id >= 0 && id < users.length) {
    res.json(users[id]);
  } else {
    res.sendStatus(404);
  }
});

export default router;

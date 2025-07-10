import { Router } from 'express';
export const router = Router();

router.post('/login', (req, res) => {
  res.send({ message: 'Login route placeholder' });
});

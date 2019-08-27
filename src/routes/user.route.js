import express from 'express';
import { prisma } from '../generated/prisma-client';

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await prisma.users();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user({ id });
  res.json(user);
});

router.post('/', async (req, res) => {
  const newUser = await prisma.createUser(req.body);
  res.json(newUser);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedUser = await prisma.updateUser({
    where: { id },
    data: req.body
  });
  res.json(updatedUser);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedUser = await prisma.deleteUser({ id });
  res.json(deletedUser);
});

export default router;

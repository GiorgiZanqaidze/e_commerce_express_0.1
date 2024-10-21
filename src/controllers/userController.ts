import { Request, Response } from 'express'; // Keep these imports together
import { PrismaClient } from '@prisma/client'; // PrismaClient import

const prisma = new PrismaClient(); // Initialize Prisma Client

// GET all users
export const getUsers = async (_: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

// GET a single user by ID
export const getUserById = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: { id: Number(req.params.id) },
  });
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
};

// POST a new user
export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const newUser = await prisma.user.create({
    data: { name, email, password },
  });
  res.status(201).json(newUser);
};

// PUT (update) a user by ID
export const updateUser = async (req: Request, res: Response) => {
  const { name } = req.body;
  const user = await prisma.user.update({
    where: { id: Number(req.params.id) },
    data: { name },
  });
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
};

// DELETE a user by ID
export const deleteUser = async (req: Request, res: Response) => {
  try {
    await prisma.user.delete({
      where: { id: Number(req.params.id) },
    });
    res.status(204).send(); // No content to send back
  } catch (error) {
    res.status(404).send('User not found'); // Handle user not found
  }
};

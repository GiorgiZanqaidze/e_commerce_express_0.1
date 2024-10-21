// src/routes/userRoutes.ts

import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/userController';
import express from 'express';

const router = express.Router();

// GET all users
router.get('/', getUsers);

// GET a single user by ID
router.get('/:id', getUserById);

// POST a new user
router.post('/', createUser);

// PUT (update) a user by ID
router.put('/:id', updateUser);

// DELETE a user by ID
router.delete('/:id', deleteUser);

export default router;

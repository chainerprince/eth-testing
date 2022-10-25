import express from 'express';
import { loginHandler, registerHandler,logoutHandler } from '../controllers/auth.controller';
import { validate } from '../middleware/validate';
import { createUserSchema, loginUserSchema } from '../schema/user.schema';

const router = express.Router();

// Register user route
router.post('/register', validate(createUserSchema), registerHandler);

// Login user route
router.post('/login', validate(loginUserSchema), loginHandler);
router.post('/logout', logoutHandler);

export default router;
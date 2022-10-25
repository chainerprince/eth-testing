import express from 'express';
import {  
  ethHandler,
} from '../controllers/eth.controller';
import { deserializeUser } from '../middleware/deserializeUser';
import { requireUser } from '../middleware/requireUser';
const router = express.Router();
router.use(deserializeUser, requireUser);
router.get('/', ethHandler);

export default router;
import express from 'express';
import accountController from '@/controllers/account.controller';

const router = express.Router();

router.post('/register', accountController.register);
router.post('/login', accountController.login);

export default router;

import express from 'express';
import authenticate from '@/helpers/authenticate';
import userRoute from './user.route';
import accountRoute from './account.route';

const router = express.Router();

router.use('/user', authenticate, userRoute);
router.use('/account', accountRoute);

export default router;

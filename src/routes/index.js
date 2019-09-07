import express from 'express';
import userRoute from './user.route';
import accountRoute from './account.route';

const router = express.Router();

router.use('/user', userRoute);
router.use('/account', accountRoute);

export default router;

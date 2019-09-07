import express from 'express';
import authorize from '@/helpers/authorize';
import { roles } from '@/config/constants';
import userController from '@/controllers/user.controller';

const router = express.Router();

router.get('/', authorize(roles.admin, roles.manager, roles.staff), userController.list);

router.get('/:id', authorize(roles.admin, roles.manager, roles.staff), userController.retrieve);

router.post('/', authorize(roles.admin, roles.manager, roles.staff), userController.create);

router.put('/:id', authorize(roles.admin, roles.manager, roles.staff), userController.update);

router.delete('/:id', authorize(roles.admin, roles.manager, roles.staff), userController.destroy);

export default router;

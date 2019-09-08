import express from 'express';
import { celebrate, Joi } from 'celebrate';
import authorize from '@/helpers/authorize';
import { roles } from '@/config/constants';
import controller from '@/controllers/user.controller';

const router = express.Router();

router.get('/', authorize(roles.admin, roles.manager, roles.staff), controller.list);

router.get(
  '/:id',
  authorize(roles.admin, roles.manager, roles.staff),
  celebrate({
    params: Joi.object().keys({
      id: Joi.string()
        .guid()
        .required(),
    }),
  }),
  controller.retrieve,
);

router.post(
  '/',
  authorize(roles.admin, roles.manager, roles.staff),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email(),
      phoneNumber: Joi.string(),
      address: Joi.string(),
      dob: Joi.string().isoDate(),
      sex: Joi.string().valid('MALE', 'FEMALE'),
    }),
  }),
  controller.create,
);

router.put(
  '/:id',
  authorize(roles.admin, roles.manager, roles.staff),
  celebrate({
    params: Joi.object().keys({
      id: Joi.string()
        .guid()
        .required(),
    }),
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email(),
      phoneNumber: Joi.string(),
      address: Joi.string(),
      dob: Joi.string().isoDate(),
      sex: Joi.string().valid('MALE', 'FEMALE'),
    }),
  }),
  controller.update,
);

router.delete(
  '/:id',
  authorize(roles.admin, roles.manager, roles.staff),
  celebrate({
    params: Joi.object().keys({
      id: Joi.string()
        .guid()
        .required(),
    }),
  }),
  controller.destroy,
);

export default router;

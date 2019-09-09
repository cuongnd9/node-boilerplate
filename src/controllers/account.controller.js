import service from '@/services/account.service';

async function register(req, res, next) {
  try {
    const newAccount = await service.register(req.body);
    res.json(newAccount);
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const data = await service.login(req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

export default {
  register,
  login,
};

import service from '@/services/account.service';

async function register(req, res) {
  const newAccount = await service.register(req.body);
  res.json(newAccount);
}

async function login(req, res) {
  const data = await service.login(req.body);
  res.json(data);
}

export default {
  register,
  login,
};

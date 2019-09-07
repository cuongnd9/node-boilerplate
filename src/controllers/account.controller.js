import accountService from '@/services/account.service';

async function register(req, res) {
  const newAccount = await accountService.register(req.body);
  res.json(newAccount);
}

async function login(req, res) {
  const token = await accountService.login(req.body);
  res.json(token);
}

export default {
  register,
  login,
};

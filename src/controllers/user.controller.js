import service from '@/services/user.service';

async function list(req, res) {
  const users = await service.getUsers();
  res.json(users);
}

async function retrieve(req, res) {
  const { id } = req.params;
  const user = await service.getUser(id);
  res.json(user);
}

async function create(req, res) {
  const newUser = await service.createUser(req.body);
  res.json(newUser);
}

async function update(req, res) {
  const { id } = req.params;
  const updatedUser = await service.updateUser(id, req.body);
  res.json(updatedUser);
}

async function destroy(req, res) {
  const { id } = req.params;
  const deletedUser = await service.deleteUser(id);
  res.json(deletedUser);
}

export default {
  list,
  retrieve,
  create,
  update,
  destroy,
};

import service from '@/services/user.service';

async function list(req, res, next) {
  try {
    const users = await service.getUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
}

async function retrieve(req, res, next) {
  try {
    const { id } = req.params;
    const user = await service.getUser(id);
    res.json(user);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const newUser = await service.createUser(req.body);
    res.json(newUser);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const { id } = req.params;
    const updatedUser = await service.updateUser(id, req.body);
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
}

async function destroy(req, res, next) {
  try {
    const { id } = req.params;
    const deletedUser = await service.deleteUser(id);
    res.json(deletedUser);
  } catch (err) {
    next(err);
  }
}

export default {
  list,
  retrieve,
  create,
  update,
  destroy,
};

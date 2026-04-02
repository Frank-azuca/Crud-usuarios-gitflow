const { users } = require('../models/usermodel.js');

let id = 1;

const getUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  res.json(user);
};

const createUser = (req, res) => {
  const user = { id: id++, ...req.body };
  users.push(user);
  res.json(user);
};

const updateUser = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  Object.assign(user, req.body);
  res.json(user);
};

const deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  users.splice(index, 1);
  res.json({ message: 'Usuario eliminado' });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
const { users } = require('../models/usermodel.js');

let id = 1;

const getUsers = (req, res) => {
  res.json(users);
};

const createUser = (req, res) => {
  const user = { id: id++, ...req.body };
  users.push(user);
  res.json(user);
};

module.exports = {
  getUsers,
  createUser
};
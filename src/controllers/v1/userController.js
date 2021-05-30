const createUser = (req, res) => {
  res.status(201).send({ message: 'User has been saved' });
};
const getUsers = (req, res) => {
  res.status(200).send({ data: [] });
};
const getUserById = (req, res) => {
  res.status(200).send({ data: {} });
};
const updateUser = (req, res) => {
  res.status(200).send({ data: {} });
};
const deleteUser = (req, res) => {
  res.status(200).send({ message: 'User has been deleted' });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};

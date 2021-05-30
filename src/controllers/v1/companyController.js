const createCompany = (req, res) => {
  res.status(201).send({ message: 'Company has been saved' });
};
const getCompanies = (req, res) => {
  res.status(200).send({ data: [] });
};
const getCompanyById = (req, res) => {
  res.status(200).send({ data: {} });
};
const updateCompany = (req, res) => {
  res.status(200).send({ data: {} });
};
const deleteCompany = (req, res) => {
  res.status(200).send({ data: 'Company has been deleted' });
};

module.exports = {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
};

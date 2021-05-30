const userRoute = require('./userRoute');
const companyRoute = require('./companyRoute');

const prefix = '/api/v1';
module.exports = (app) => {
  app.use(`${prefix}/user`, userRoute);
  app.use(`${prefix}/company`, companyRoute);
};

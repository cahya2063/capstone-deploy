const { checkDatabaseHandler, registerHandler, loginHandler } = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/api/check-db',
    handler: checkDatabaseHandler,
  },
  {
    method: 'POST',
    path: '/api/register',
    handler: registerHandler,
  },
  {
    method: 'POST',
    path: '/api/login',
    handler: loginHandler,
  },
];

module.exports = routes;

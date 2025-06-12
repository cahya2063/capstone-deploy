const { checkDatabaseHandler, registerUserHandler, loginUserHandler } = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return { message: 'Backend Hapi aktif dan berjalan' };
    },
  },
  {
    method: 'GET',
    path: '/api/check-db',
    handler: checkDatabaseHandler,
  },
  {
    method: 'POST',
    path: '/api/register',
    handler: registerUserHandler,
  },
  {
    method: 'POST',
    path: '/api/login',
    handler: loginUserHandler,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return h
        .response({ statusCode: 404, error: 'Not Found', message: 'Route tidak ditemukan' })
        .code(404);
    },
  },
];

module.exports = routes;

const aliveRoute = {
  method: 'GET',
  path: '/alive.txt',
  handler: (request, h) => {
    return 'OK';
  },
  options: {
    tags: ['api'],
  },
};

module.exports = aliveRoute;

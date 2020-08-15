const aliveRoute = {
  method: 'GET',
  path: '/alive.txt',
  handler: (request, h) => {
    return 'OK';
  },
};

module.exports = aliveRoute;

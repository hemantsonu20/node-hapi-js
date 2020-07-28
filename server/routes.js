const routes = [
  {
    method: 'GET',
    path: '/alive.txt',
    handler: (request, h) => {

        return 'OK';
    } 
  }

];

module.exports = routes;

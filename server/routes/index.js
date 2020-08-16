const aliveRoute = require('./aliveRoute');
const productRoutes = require('./productRoutes');

module.exports = [aliveRoute, ...productRoutes];

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const routes = require('./routes');
const Package = require('../package');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  const swaggerOptions = {
    info: {
      title: 'Api Documentation',
      version: Package.version,
    },
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);

  server.route(routes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();

'use strict';

import * as Hapi from '@hapi/hapi';

import { playlistCreate, playlistShow, playlistIndex } from './server/handlers';

const init = async () => {
  const server = new Hapi.Server({
    port: 3000,
    host: 'localhost'
  });

  server.route({
    method: 'POST',
    path: '/playlists',
    handler: playlistCreate
  });

  server.route({
    method: 'GET',
    path: '/playlists',
    handler: playlistIndex
  });

  server.route({
    method: 'GET',
    path: '/playlists/{id}',
    handler: playlistShow
  });

  await server.start();

  console.log(`Server running: ${server.info.uri}`)
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();

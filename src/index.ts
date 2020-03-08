'use strict';

import * as Hapi from '@hapi/hapi';

import { playlistCreate, playlistShow, playlistIndex } from './server/handlers';


require('dotenv').config();

const init = async () => {
  const server = new Hapi.Server({
    port: SERVER_PORT,
    host: process.env.SERVER_HOST
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

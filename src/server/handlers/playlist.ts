import * as Hapi from '@hapi/hapi';

import { PlaylistAttributes } from '../interfaces';

export const playlistCreate = (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
    const { 
        name,
        origin,
        origin_type,
        tracks
    } = request.payload as PlaylistAttributes;

    return {
        message: `New Playlist Created: ${name}`,
        data: request.payload
    };
}

export const playlistIndex = (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
    return {
        message: 'Showing all playlists',
        data: { ids: [] }
    };
}

export const playlistShow = (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
    const { id } = request.params;

    return {
        message: `Showing a playlist: ${id}`,
        data: { id }
    };
}

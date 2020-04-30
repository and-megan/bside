const SpotifyWebApi = require('spotify-web-api-node');

const SCOPES = ['user-read-private', 'user-read-email'];
const STATE = 'bside'

export public SpotifyApi implements SpotifyCredentials {

    constructor(private initData: SpotifyCredentials) {

    }

}

export const createSpotifyApi = () => {
    console.log('creating spotify api');

    return new SpotifyWebApi({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      redirectUri: 'http://localhost:8080/callback'
    });
};

export const authorizeSpotifyApi = (spotifyApi: any) => {
    // const authorizeURL = spotifyApi.createAuthorizeURL(SCOPES, STATE);

    return spotifyApi.clientCredentialsGrant()
    .then((data) => {
        console.log('The access token is ' + data.body['access_token']);
        spotifyApi.setAccessToken(data.body['access_token']);
    }).catch((err) => {
        console.log('error performing clientCredentialsGrant', err);
    });
};

const createPlaylist = (spotifyApi: any, playlistName: string) => {
  console.log('create playlist');
};

const addTrack = (spotifyApi: any, playlistId: number, track: Track) => {
  console.log('add track');
};

const getTrack = (
  spotifyApi: any,
  song: string,
  artist: string,
  album?: string,
  recordLabel?: string
) => {
  console.log('getting track');
};

const determinePlaylistName = (mostRecentHeader: string, trackPlayedAt: string) => {
    // use the most recent header, e.g. March 1, 2020 and
    // add track played at to determine the playlist name this track categorized under
    // 12:01am - 3am
    // 3:01am - 6am
    // 6:01am - 9am
    // 9:01am - 12pm
};

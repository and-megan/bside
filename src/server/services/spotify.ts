const createPlaylist = (spotify: Spotify, playlistName: string) => {
  console.log('create playlist');
};

const addTrack = (spotify: Spotify, playlistId: number, track: Track) => {
  console.log('add track');
};

const getTrack = (
  spotify: Spotify,
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
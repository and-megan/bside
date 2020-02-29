interface TrackList {
    artist: string;
    song: string;

    album?: string;
    recordLabel?: string;
}

export interface TrackLists extends Array<TrackList>{}

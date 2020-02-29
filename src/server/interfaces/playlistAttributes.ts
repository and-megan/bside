import { OriginType } from '../enums';

import { TrackLists } from '../interfaces';

export interface PlaylistAttributes {
    name: string;
    origin: string;
    origin_type: OriginType;
    tracks: TrackLists;
}

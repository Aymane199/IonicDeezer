import {Artist} from './Artist';

export class Album {
    id: number;
    title: string;
    link: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    genre_id: number;
    nb_tracks: number;
    record_type: string;
    tracklist: string;
    explicit_lyrics: boolean;
    artist: Artist;
    type: string;
}

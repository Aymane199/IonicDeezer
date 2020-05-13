import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataSearchArtist} from '../../table/DataSearchArtist';
import {DataSearchAlbum} from '../../table/DataSearchAlbum';
import {DataSearchTrack} from '../../table/DataSearchTrack';

@Injectable({
    providedIn: 'root'
})
export class DeezerService {

    TAG: string = 'DeezerService';

    constructor(private http: HttpClient) {

    }
  getAuthors(artist: string): Promise<DataSearchArtist> {
    console.log(`${this.TAG} getAuthors ${artist}`);
    const url: string = 'https://api.deezer.com/search/artist?q=' + encodeURI(artist);
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        const json: DataSearchArtist = data as DataSearchArtist;
        resolve(json);
      }, err => {
        console.log(err);
      });
    });
  }
 getAlbums(artist: string): Promise<DataSearchAlbum> {
    console.log(`${this.TAG} getAlbum ${artist}`);
    const url: string = 'https://api.deezer.com/search/album?q=' + encodeURI(artist);
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        const json: DataSearchAlbum = data as DataSearchAlbum;
        resolve(json);
      }, err => {
        console.log(err);
      });
    });
  }
getTracks(idAlbum: any): Promise<DataSearchTrack> {
    console.log(`${this.TAG} getAlbum ${idAlbum}`);
    const url: string = 'https://api.deezer.com/album/' + encodeURI(idAlbum);
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        const json: DataSearchAlbum = data as DataSearchAlbum;
        resolve(json);
      }, err => {
        console.log(err);
      });
    });
  }

}

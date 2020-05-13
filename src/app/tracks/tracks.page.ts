import { Component, OnInit } from '@angular/core';
import {Album} from '../../table/Album';
import {DeezerService} from '../service/deezer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Track} from '../../table/Track';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.page.html',
  styleUrls: ['./tracks.page.scss'],
})
export class TracksPage implements OnInit {

  TAG: string = 'AlbumsPage';
  dataSearchTrack: Track[] = [];
  tracks: Track[] = [];
  loading: boolean = false;
  idAlbum;

  constructor(private deezerService: DeezerService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {


  }
  ionViewWillEnter(){
    this.route.queryParams.subscribe(params => {
      this.idAlbum = params['id'];
      this.onSearchTracks(this.idAlbum);
    });
  }

  onSearchTracks(id : any) {
    this.loading = true;
    console.log(this.TAG + ': onSearchTracks : val : ' + id);
    let request = this.deezerService.getTracks(id);
    request
        .then(response => {
          console.log(response.tracks.data);
          this.dataSearchTrack = response.tracks.data;
          this.loading = false;
        })
        .catch(error => console.log(error));

  }

}

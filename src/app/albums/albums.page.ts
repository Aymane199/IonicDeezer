import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DeezerService} from '../service/deezer.service';
import {Artist} from '../../table/Artist';
import {Album} from '../../table/Album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {

  TAG: string = 'AlbumsPage';
  dataSearchAlbum: Album[] = [];
  artist: Album[] = [];
  loading: boolean = false;
  nameArtist;

  constructor(private deezerService: DeezerService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {


  }
  ionViewWillEnter(){
    this.route.queryParams.subscribe(params => {
      this.nameArtist = params['name'];
      this.onSearchAlbum(this.nameArtist);
    });
  }

  onSearchAlbum(name : String) {
    this.loading = true;
    console.log(this.TAG + ': onSearchAlbum : val : ' + name);
    let request = this.deezerService.getAlbums(name);
    request
        .then(response => {
          console.log(response.data);
          this.dataSearchAlbum = response.data;
          this.loading = false;
        })
        .catch(error => console.log(error));

  }

  gotoTracks(index : any){
    this.router.navigate(['/tracks'], { queryParams: { id : index } });
  }


}

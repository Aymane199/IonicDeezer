import {Component} from '@angular/core';
import {DeezerService} from '../service/deezer.service';
import {DataSearchArtist} from '../../table/DataSearchArtist';
import {Injectable} from '@angular/core';
import {Artist} from '../../table/Artist';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    TAG: string = 'HomePage';
    dataSearchArtist: Artist[] = [];
    artist: Artist[] = [];
    loading: boolean = false;

    constructor(private deezerService: DeezerService,private router:Router) {

    }

    onSearchArtist(event: any) {
        this.loading = true;
        let val = event.target.value;
        console.log(this.TAG + ': onSearchArtist : val : ' + val);
        let request = this.deezerService.getAuthors(val);
        request
            .then(response => {
                console.log(response.data);
                this.dataSearchArtist = response.data;
                this.loading = false;
            })
            .catch(error => console.log(error));

    }

    gotoAlbums(index : any){
        this.router.navigate(['/albums'], { queryParams: { name : index } });
    }
}

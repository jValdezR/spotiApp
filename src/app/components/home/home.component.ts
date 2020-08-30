import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  // paises: any[] = [];

  // constructor(private _http: HttpClient) { 
  //   this._http.get('https://restcountries.eu/rest/v2/lang/es')
  //   .subscribe((data: any) => {
  //     this.paises = data;
  //     console.log(data);
  //   });
  // }
  constructor(private _spotify: SpotifyService){
    this._spotify.getNewReleases();
  }



}

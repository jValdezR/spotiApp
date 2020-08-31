import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista: any = {};
  loading: boolean;
  topTrack: any[];


  constructor(private _router:ActivatedRoute,
              private _spotify:SpotifyService) {
      this.loading = true;
      this._router.params.subscribe(params =>{
      console.log(params);

      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
      this.loading = false;
    })
   }

   getArtista(id:string){
     this.loading = true;
     this._spotify.getArtista(id)
      .subscribe(data=>{
          console.log(data);
          this.artista = data;
          this.loading=false;
      })
   }
   getTopTracks(id:string){
      this._spotify.getTopTracks(id).subscribe(data=>{
        console.log(data);
        this.topTrack = data;
      })
   }

}

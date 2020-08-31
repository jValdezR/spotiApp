import { Component, Input } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: []
})
export class TarjetasComponent  {

  @Input() items:any[] = [];

  constructor(private _router:Router) { }

  verArtista(item:any){
    let artistaID;

    if(item.type === 'artist'){
      artistaID = item.id;
    }
    else{
      artistaID = item.artists[0].id;
    }
    this._router.navigate(['/artist',artistaID])
  }

}

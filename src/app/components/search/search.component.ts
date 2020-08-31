import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  artistas: any[] = [];
  loading: boolean;
  constructor(private _spoty: SpotifyService) {}

  buscar(term) {
    this.loading = true;
    console.log(term);
    this._spoty.getArtistas(term).subscribe((data: any) => {
      this.artistas = data;
      this.loading = false;
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery(query: string) {
    //Engloba las url y el header
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCvjpMCPYGjGcJdMwJHSIyxCYa4uFnL2T1ykj09kTREQytDbXd7cVVgbe7OXCwpk4BAG06cCzmh3Jb9DYU',
    });

    return this._http.get(url, { headers });
  }
  // tslint:disable-next-line: typedef
  getNewReleases() {
    // Este usa la funcion map para regresar la informacion ya procesada

    // const headers = new HttpHeaders({
    //   Authorization:
    //     'Bearer BQBfDHbmKpOAXUY0xuEMnjwUzBjoH7ImiSBSZIe_P3M-CR1_2J6W2sQACugUko-kdSzsKa3ZCNAjpDvZT0E',
    // });

    return this.getQuery('browse/new-releases') // Mega simplificado
      .pipe(map((data) => data['albums'].items));
    // return this._http.get('browse/new-releases', {
    //   headers}).pipe(map(data =>{
    //     // tslint:disable-next-line: no-string-literal
    //     return data['albums'].items;
  }

  // tslint:disable-next-line: typedef
  getArtistas(termino: string) {
    return this.getQuery(
      `search?query=${termino}&type=artist&offset=0&limit=20`
    ).pipe(map((data) => data['artists'].items));
  }
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    // .pipe(map((data) => data['artists'].items));
  }
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=mx`)
    .pipe(map((data) => data['tracks']));
  }
}

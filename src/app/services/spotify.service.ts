import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {
    console.log('Spotify service listo');
  }

  // tslint:disable-next-line: typedef
  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAFCabcqTZ0JX4rTzq13hoUJ-llFPD7qFZhgR129431Dl-R_ZbKYNsf8Iy5YdDLtFTlYMkfhoN7pnolWco',
    });

    this._http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe((data) => {
        console.log(data);
      });
  }
}

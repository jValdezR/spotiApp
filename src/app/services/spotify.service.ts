
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  constructor(private _http: HttpClient) {
    console.log('Spotify service listo');
  }

  // tslint:disable-next-line: typedef
  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization':
        'Bearer BQCjJftNq2ah1ADwmRk2UD5V9H56lMHAu4BTmu22HA0TuRTeJgwaAxMh_FU1ZU8DVfyM3Bqn',
      });

    this._http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe(data => {
        console.log(data);
      });
  }
}

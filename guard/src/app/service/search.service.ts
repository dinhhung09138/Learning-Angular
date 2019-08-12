import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { SearchItem } from '../Models/SearchItem.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiRoot = 'https://itunes.apple.com/search';
  results: SearchItem[];

  constructor(private http: HttpClient) {
    this.results = [];
  }

  search(term: string) {
    return new Promise((resolve, reject) => {
      this.results = [];
      let url: string;
      url = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      // this.http
      //   .jsonp(url, 'callback')
      //   .toPromise()
      //   .then(
      //     res => {
      //       // Success
      //       this.results = res.results.map(item => {
      //         return new SearchItem(
      //           item.trackName,
      //           item.artistName,
      //           item.trackViewUrl,
      //           item.artworkUrl30,
      //           item.artistId
      //         );
      //       });
      //       resolve();
      //     },
      //     msg => {
      //       // Error
      //       reject(msg);
      //     }
      //   );
    });
  }
}

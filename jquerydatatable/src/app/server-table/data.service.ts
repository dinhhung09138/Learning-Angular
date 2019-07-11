import { Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// For exeption process
import { catchError, tap, map } from 'rxjs/operators';

import { ServerTableComponent } from './server-table.component';


@Inject({
  providedIn: ServerTableComponent
})
export class DataService {

  private BASE_URL = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {

  }

  getProduct(): Observable<any> {
    return this.http.get(this.BASE_URL).pipe(
      tap(_ => this.log('Get data')),
      catchError(this.handlerError<any>('gethero', []))
    );
  }

  private log(message) {
    console.log(message);
  }

  private handlerError<T> (operation = 'operation', result?: T) {
    return(error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}

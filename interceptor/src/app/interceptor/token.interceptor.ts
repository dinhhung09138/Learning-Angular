import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  // Function which will be called for all http calls
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log(`Function which will be called for all http calls`);
    console.log(request);
    // Prevent checking if the current url include '/token' string
    if (request.url.includes('/token')) {
      return next.handle(request);
    }

    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'token');
    headers = headers.append('Content-Type', 'application/json');
    // Cache-Control is the HTTP/1.1 implementation, prevent client from caching the response
    headers = headers.append('Cache-Control', 'no-cache');
    // Pragma is the HTTP/1.0 implementation, prevent client from caching the response
    headers = headers.append('Pragma', 'no-cache');
    // Update request params
    const updateRequest = request.clone({ headers });

    // logging the updated parameter to the browser's control
    console.log(`logging the updated parameter to the browser's control`);
    console.log(updateRequest);

    return next.handle(updateRequest).pipe(
      tap(
        event => {
          // logging the http response to browser's console in case of a success
          if (event instanceof HttpResponse) {
            console.log('api call success :', event);
          }
        },
        error => {
          // logging the http response to browser's console in case of a failuer
          if (error instanceof HttpResponse) {
            console.log('api call error :', error);
          }
        }
      )
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHeaders } from '@angular/common/http';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HeaderRequestInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('header request interceptor');

    // if (!request.url.includes('headers')) {
    //   return next.handle(request);
    // }

    // if (request.url.includes('image')) {
    //   return next.handle(request);
    // }

    let headers = new HttpHeaders();

    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Cache-Control', 'no-cache');
    headers = headers.append('Pragma', 'no-cache');

    const token = localStorage.getItem('token');

    if (token) {
      headers = headers.append('Authorization', 'Bearer ' + token);
    }

    const requestModified = request.clone({ headers });

    return next.handle(requestModified);

  }
}

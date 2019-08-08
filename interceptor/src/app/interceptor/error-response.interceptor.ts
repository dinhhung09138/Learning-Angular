import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

/**
 * Error handler process when request or response got an error
 */
@Injectable()
export class ErrorResponseInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('error response interceptor');

    return next.handle(request).pipe(
      map((event: HttpResponse<any>) => {
        console.log('event');
        console.log(event);
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log('error');
        console.log(error);

        switch (error.status) {
          case 0:     // Unknown error
            break;
          case 200:   // Http failure during parsing
            break;
          case 405:   // Method Not Allowed
            break;
        }

        if (error.status === 405) {
          console.log(error.message);
        }

        return throwError(error);
      })
    );
  }

}

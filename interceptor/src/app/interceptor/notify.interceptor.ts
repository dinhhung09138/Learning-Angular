import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse } from '@angular/common/http';
import { HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Listen request from server send notify to client
 */
@Injectable()
export class NotifyInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!request.url.includes('/hub/notify')) {
      return next.handle(request);
    }
    // TODO show notify

    return next.handle(request).pipe(
      map((event: HttpResponse<any>) => {
        return event;
      })
    );

  }
}

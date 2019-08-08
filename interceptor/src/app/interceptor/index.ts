import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderRequestInterceptor } from './header-request.interceptor';
import { ErrorResponseInterceptor } from './error-response.interceptor';
import { NotifyInterceptor } from './notify.interceptor';

export const HttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: NotifyInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HeaderRequestInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorResponseInterceptor, multi: true }
];

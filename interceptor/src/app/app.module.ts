import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Use Http service
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptorProviders } from './interceptor/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    HttpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

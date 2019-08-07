import { BrowserModule } from '@angular/platform-browser';
// Inject for using formGroup and formControls
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,          // Inject for using formGroup and formControls
    ReactiveFormsModule,  // Inject for using formGroup and formControls
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

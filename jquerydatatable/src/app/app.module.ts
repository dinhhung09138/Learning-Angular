import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

// Import DatablesModule
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalTableComponent } from './normal-table/normal-table.component';
import { ServerTableComponent } from './server-table/server-table.component';


@NgModule({
  declarations: [
    AppComponent,
    NormalTableComponent,
    ServerTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule  // Import datatable module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

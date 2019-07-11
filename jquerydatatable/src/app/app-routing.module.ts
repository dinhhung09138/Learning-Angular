import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalTableComponent } from './normal-table/normal-table.component';
import { ServerTableComponent } from './server-table/server-table.component';

const routes: Routes = [
  { path: 'normal-table', component: NormalTableComponent },
  { path: 'server-table', component: ServerTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

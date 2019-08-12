import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { AuthenticationGuardService } from './guards/authentication-guard.service';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import { OnlyLoggedInUsersGuardService } from './guards/only-logged-in-users-guard.service';
import { AlwaysAuthChildrenGuard } from './guards/always-auth-children.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist', canActivate: [AuthenticationGuardService], component: ArtistComponent },
  {
    path: 'artist/:artistId',
    component: ArtistComponent,
    canActivate: [OnlyLoggedInUsersGuardService, AuthenticationGuardService],
    canActivateChild: [AlwaysAuthChildrenGuard],
    children: [
      {path: '', redirectTo: 'tracks', pathMatch: 'full'},
      {path: 'tracks', component: ArtistTrackListComponent},
      {path: 'albums', component: ArtistAlbumListComponent},
    ]
  },
  {path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

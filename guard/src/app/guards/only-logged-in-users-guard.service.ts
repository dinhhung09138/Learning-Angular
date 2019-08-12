import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInUsersGuardService implements CanActivate {

  constructor(private route: ActivatedRoute, private routeSnapshot: ActivatedRouteSnapshot, private userService: UserService) { }

  canActivate() {
    console.log(this.route.url);
    console.log(this.route.snapshot);
    console.log(this.route.snapshot.params.artistId);
    console.log(this.route.snapshot.data.user);
    console.log(this.route.snapshot.url.join(''));
    console.log(this.routeSnapshot.url.join(''));
    console.log('OnlyLoggedInUsers');
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      window.alert(`You don't have permission to view this page`);
      return false;
    }
  }


}

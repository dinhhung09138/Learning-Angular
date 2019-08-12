import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchComponent } from '../search/search.component';

@Injectable({
  providedIn: 'root'
})
export class UnsearchedTermGuardGuard implements CanDeactivate<SearchComponent>  {

  canDeactivate(component: SearchComponent,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
        console.log('UnsearchedTermGuard');
        console.log(route.params);
        console.log(state.url);
        // return component.canDeactivate() || window.confirm('Are you sure?');
        return window.confirm('Are you sure?');
    }
}

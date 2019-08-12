import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlwaysAuthChildrenGuard implements CanActivateChild  {

  canActivateChild() {
    console.log('AlwaysAuthChildrenGuard');
    return true;
  }
}

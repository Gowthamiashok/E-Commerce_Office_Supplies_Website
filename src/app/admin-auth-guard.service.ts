import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map } from 'rxjs/operators';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
    
      .pipe(map((appUser:any) => appUser.isAdmin));

  }
}

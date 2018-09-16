import { Injectable, NgZone } from '@angular/core';
import { Router} from '@angular/router';
import { HomeComponent } from '../component/home/home.component';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  private mail;

  constructor(private router: Router, private _http: Http, private zone:NgZone) {
    this.isUserLoggedIn = false;
  }
   
  verifyUser(user) {
    return this._http.get('/api/user/' + user.username + '&' + user.password)
            .map(res => res.json().data);
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  loginIn(){
    this.setUserLoggedIn();
    this.zone.run(() => this.router.navigate(['/main/vis/']) )
    // this.router.navigate(['/main/home/db2']);

  }

  setUserLoggedOut() {
    this.isUserLoggedIn = false;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

}

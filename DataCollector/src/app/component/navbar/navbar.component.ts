import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '../../services/user.service';
import { DataService } from '../../services/data.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  routes: Object[] = [
  {
    title: 'Home',
    route: '/main/home/db2',
    icon: 'home',
  },
  {
    title: 'Visualisation',
    route: '/main/vis',
    icon: 'dashboard',
  },
  {
    title: 'Action',
    route: '/main/action/clean',
    icon: 'settings',
  }];

  data: any[] = [];
  constructor(private router: Router, private user: UserService, private dataService: DataService) { }

  ngOnInit() {
    // this.usage.ngOnInit();
    this.dataService.getCollectedData("Randstad_Interimbot")
      .then(data => {
        this.data = data;
      },
        (err) => console.log(err)
        );
  }

  logOut(){
      this.user.setUserLoggedOut();
      this.router.navigate(['/login']);
  }

}

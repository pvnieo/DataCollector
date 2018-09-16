import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router} from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;
    constructor(private router: Router, private userService: UserService) { }

    ngOnInit() {
    }

    login(){
      var user = {"username" : this.username, "password": this.password};
        var flag ;

        this.userService.verifyUser(user)
            .subscribe(users => flag = users.length,
                       (err) => console.error(err),
                       () => flag == 1 ? this.userService.loginIn() : alert("Username or Password incorrect!")
                       );
    }
}

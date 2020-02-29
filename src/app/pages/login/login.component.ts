import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    email:'',
    password:'',
  };
  constructor(private auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    console.log(this.loginUserData)
    this.auth.logIn(this.loginUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.user.jwtToken);
        this._router.navigate(["/home"]);
      },
      err => console.log(err)
    );
  }

}

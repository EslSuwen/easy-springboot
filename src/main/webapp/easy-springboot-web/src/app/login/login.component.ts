import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authModel: any = {};

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

  login() {

    if (this.authModel.username === this.authModel.password && this.authModel.username != null) {
      this.router.navigate(['sidenav/personalinfo']);
    } else {
      alert('密码错误');
    }

  }
}

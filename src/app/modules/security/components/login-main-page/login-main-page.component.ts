import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-main-page',
  templateUrl: './login-main-page.component.html',
  styleUrls: ['./login-main-page.component.scss']
})
export class LoginMainPageComponent implements OnInit {

  constructor(private router: Router) { }

  goToSignUpPage() {
    this.router.navigate(['./security/sign-up']);
  }


  ngOnInit(): void {
  }
}

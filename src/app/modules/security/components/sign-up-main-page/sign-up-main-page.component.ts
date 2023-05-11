import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-main-page',
  templateUrl: './sign-up-main-page.component.html',
  styleUrls: ['./sign-up-main-page.component.scss']
})
export class SignUpMainPageComponent implements OnInit {

  constructor(private router: Router) { }

  goToLoginPage() {
    this.router.navigate(['./security/login']);
  }

  ngOnInit(): void {
  }

}

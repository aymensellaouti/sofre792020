import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../common/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  errorMessage = '';
  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['cv']);
    }
  }
  login(form: NgForm) {
    this.authService.login(form.value).subscribe(
      (data) => {
        localStorage.setItem('token', data.id);
        this.errorMessage = '';
        this.router.navigate(['cv']);
      },
      (erreur) => {
        console.log(erreur.error);
        this.errorMessage = erreur.error.error.message;
      }
    );
  }
}

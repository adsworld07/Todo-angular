import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorText: string = '';
  isUserLoggedIn: boolean = localStorage.getItem('loggedInUser') ? true : false; // Check local storage

  constructor(private router: Router) { }

  login() {
    const hardcodedUser = { username: 'user', password: '123' };

    if (this.username === hardcodedUser.username && this.password === hardcodedUser.password) {
      localStorage.setItem('loggedInUser', JSON.stringify(hardcodedUser));
      this.router.navigate(['/user-todos']);
      this.isUserLoggedIn = true;
    } else {
      this.errorText = 'Invalid credentials. Please try again.';
      this.isUserLoggedIn = false;
    }
  }
}

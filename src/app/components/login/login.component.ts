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

  constructor(private router: Router) { }

  login() {
    
    const hardcodedUser = { username: 'user', password: '123' };

    if (this.username === hardcodedUser.username && this.password === hardcodedUser.password) {
      localStorage.setItem('loggedInUser', JSON.stringify(hardcodedUser));
      this.router.navigate(['/user-todos']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}

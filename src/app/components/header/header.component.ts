import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean = false; 

  constructor() {}

  ngOnInit() {
   
    this.isUserLoggedIn = this.isUserAuthenticated();
    console.log(this.isUserLoggedIn)
  }

  isUserAuthenticated(): boolean {
   
    return localStorage.getItem('loggedInUser') !== null; 
  }

  logout() {
    localStorage.clear();
    this.isUserLoggedIn = false;
    window.location.href = '/login';
  }
}

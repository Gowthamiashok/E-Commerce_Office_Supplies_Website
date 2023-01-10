import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import "firebase/auth";
import "firebase/firestore";
import { faUserLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  faUserLock = faUserLock;

  constructor(private auth: AuthService) { }

  login() {
    this.auth.login();
    
  }

}

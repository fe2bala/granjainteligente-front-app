import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({

  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    window['gapi'].auth2.getAuthInstance().signIn().then(() => {
      if (window['gapi'].auth2.getAuthInstance().isSignedIn.get()) {
        localStorage.setItem('isSignedIn', 'true');
        this.router.navigate(['/home']);
      }
    });
  }
}

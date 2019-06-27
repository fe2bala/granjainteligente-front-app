import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'granja-inteligente-front-app';
  auth: Object;

  ngOnInit() {
    window['gapi'].load('client:auth2', () => {
      // this callback is async and returns a promise:
      window['gapi'].client.init({
        clientId: '405209376728-hfgnkkfusptjd1ketgu30mjtcp4mccqe.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
}
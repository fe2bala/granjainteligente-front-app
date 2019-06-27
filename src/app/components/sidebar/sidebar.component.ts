import { Component, OnInit } from '@angular/core';
import { BaiaService } from 'src/app/services/baia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private baiaService: BaiaService, private router: Router) { }
  private baias: Array<Object> = [];
  ngOnInit() {   
    this.baiaService.getBaias().subscribe((data: Array<Object>) => {
      this.baias = data
    })

   }

  doLogout() {
    window.gapi.auth2.getAuthInstance().signOut().then(() => {
      if (!window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
        localStorage.setItem('isSignedIn', 'false');
        this.router.navigate(['/login']);
      }
    });
  }

}

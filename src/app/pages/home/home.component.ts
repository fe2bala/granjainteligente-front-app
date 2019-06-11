import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public baias:Array<Object>=[];
  constructor() { }

  ngOnInit() {
    this.baias = environment.baias;
  }

}

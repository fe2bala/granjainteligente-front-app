import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-baia',
  templateUrl: './baia.component.html',
  styleUrls: ['./baia.component.css']
})
export class BaiaComponent implements OnInit {

  @Input() baia:object={};
  constructor() { }

  ngOnInit() {
    
  }

}

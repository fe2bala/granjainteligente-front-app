import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-baia-item',
  templateUrl: './baia-item.component.html',
  styleUrls: ['./baia-item.component.css']
})
export class BaiaItemComponent implements OnInit {

  @Input() baia:object={};
  constructor() { }

  ngOnInit() {

  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agua-card',
  templateUrl: './agua-card.component.html',
  styleUrls: ['./agua-card.component.css']
})
export class AguaCardComponent implements OnInit {

  @Input() agua = {};
  constructor() { }

  ngOnInit() {
  }
  toggleWaterAuto(){
    this.agua["auto"] = !this.agua["auto"]
  }

}

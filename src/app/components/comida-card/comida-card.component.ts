import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comida-card',
  templateUrl: './comida-card.component.html',
  styleUrls: ['./comida-card.component.css']
})
export class ComidaCardComponent implements OnInit {

  @Input() comida={};
  constructor() { }

  ngOnInit() {
  }
  toggleFoodAuto(){
    this.comida["auto"] = !this.comida["auto"]
    //comando para atualizar no banco 
  }

}

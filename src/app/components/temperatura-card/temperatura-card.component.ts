import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temperatura-card',
  templateUrl: './temperatura-card.component.html',
  styleUrls: ['./temperatura-card.component.css']
})
export class TemperaturaCardComponent implements OnInit {

  @Input() temperatura={};
  constructor() { }

  ngOnInit() {
  }
  toggleTempAuto(){
    this.temperatura["auto"] = !this.temperatura["auto"]
    //comando para atualizar no banco 
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iluminacao-card',
  templateUrl: './iluminacao-card.component.html',
  styleUrls: ['./iluminacao-card.component.css']
})
export class IluminacaoCardComponent implements OnInit {

  @Input() iluminacao={};
  constructor() { }

  ngOnInit() {
  }
  toggleLight(){
    this.iluminacao["estado"] = !this.iluminacao["estado"]
  }

}

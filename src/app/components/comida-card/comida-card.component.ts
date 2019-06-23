import { Component, OnInit, Input } from '@angular/core';
import { AlimentoService } from 'src/app/services/alimento.service';

@Component({
  selector: 'app-comida-card',
  templateUrl: './comida-card.component.html',
  styleUrls: ['./comida-card.component.css']
})
export class ComidaCardComponent implements OnInit {

  @Input() comida={};
  constructor(private alimentoService: AlimentoService) { }

  ngOnInit() {
  }
  toggleFoodAuto(){
    this.comida["auto"] = !this.comida["auto"]
    this.alimentoService.putAlimento(this.comida["id"],this.comida).subscribe((data)=>{},erro=>console.log(erro))
  }

}

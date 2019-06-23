import { Component, OnInit, Input } from '@angular/core';
import { TemperaturaService } from 'src/app/services/temperatura.service';

@Component({
  selector: 'app-temperatura-card',
  templateUrl: './temperatura-card.component.html',
  styleUrls: ['./temperatura-card.component.css']
})
export class TemperaturaCardComponent implements OnInit {

  @Input() temperatura={};
  constructor(private temperaturaService: TemperaturaService) { }

  ngOnInit() {
  }
  toggleTempAuto(){
    this.temperatura["auto"] = !this.temperatura["auto"]
    this.temperaturaService.putTemperatura(this.temperatura["id"],this.temperatura).subscribe((data)=>{},erro=>console.log(erro))
  }

}

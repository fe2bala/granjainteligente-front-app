import { Component, OnInit, Input } from '@angular/core';
import { AguaService } from 'src/app/services/agua.service';

@Component({
  selector: 'app-agua-card',
  templateUrl: './agua-card.component.html',
  styleUrls: ['./agua-card.component.css']
})
export class AguaCardComponent implements OnInit {

  @Input() agua = {};
  constructor(private aguaService: AguaService) { }

  ngOnInit() {
  }
  toggleWaterAuto(){
    this.agua["auto"] = !this.agua["auto"]
    this.aguaService.putAgua(this.agua["id"],this.agua).subscribe((data)=>{},erro=>console.log(erro))
  }

}

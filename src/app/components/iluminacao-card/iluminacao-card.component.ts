import { Component, OnInit, Input } from '@angular/core';
import { IluminacaoService } from 'src/app/services/iluminacao.service';

@Component({
  selector: 'app-iluminacao-card',
  templateUrl: './iluminacao-card.component.html',
  styleUrls: ['./iluminacao-card.component.css']
})
export class IluminacaoCardComponent implements OnInit {

  @Input() iluminacao={};
  constructor(private iluminacaoService: IluminacaoService) { }

  ngOnInit() {
  }
  toggleLight(){
    this.iluminacao["estado"] = !this.iluminacao["estado"]
    this.iluminacaoService.putIluminacao(this.iluminacao["id"],this.iluminacao).subscribe((data)=>{},erro=>console.log(erro)
    )
  }

}

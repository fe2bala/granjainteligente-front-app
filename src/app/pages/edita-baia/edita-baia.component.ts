import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BaiaService } from 'src/app/services/baia.service';
import { AguaService } from 'src/app/services/agua.service';
import { AlimentoService } from 'src/app/services/alimento.service';
import { TemperaturaService } from 'src/app/services/temperatura.service';
import { IluminacaoService } from 'src/app/services/iluminacao.service';

@Component({
  selector: 'app-edita-baia',
  templateUrl: './edita-baia.component.html',
  styleUrls: ['./edita-baia.component.css']
})
export class EditaBaiaComponent implements OnInit {
  public id: number;
  public sensorAguaId: number;
  public sensorAlimentoId: number;
  public sensorTemperaturaId: number;
  public sensorLuminosidadeId: number;
  public baia: object = {};

  editaBaiaForm = new FormGroup({
    age: new FormControl(''),
    temperaturaNivel: new FormControl(''),
    aguaNivel: new FormControl(''),
    comidaNivel: new FormControl(''),
    ph: new FormControl('')
  });

  constructor(private router: Router, private baiaService: BaiaService, private route: ActivatedRoute, private aguaService: AguaService, private alimentoService: AlimentoService, private temperaturaService: TemperaturaService, private iluminacaoService: IluminacaoService) { }

  ngOnInit() {
    this.getBaia();
  }

  getBaia() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.baiaService.getBaia(this.id).subscribe(data => {
      this.baia = data;
      // console.log(this.baia);
    });
  }

  onSubmit() {
    let input = this.editaBaiaForm.value;
    this.sensorAguaId = this.baia["agua"]["id"];
    this.sensorAlimentoId = this.baia["alimento"]["id"];
    this.sensorTemperaturaId = this.baia["temperatura"]["id"];
    this.sensorLuminosidadeId = this.baia["luminosidade"]["id"];

    let baiaEditada = {
      name: this.baia["name"],
      age: parseInt(input.age),
      status: this.baia["status"]
    };

    let sensorAgua = {
      nivel: parseFloat(input.aguaNivel),
      nivelSet: this.baia["agua"]["nivelSet"],
      data: null,
      descricao: this.baia["agua"]["descricao"],
      estado: this.baia["agua"]["estado"],
      auto: this.baia["agua"]["auto"],
      ph: parseFloat(input.ph)
    };

    let sensorAlimento = {
      nivel: parseFloat(input.comidaNivel),
      nivelSet: this.baia["alimento"]["nivelSet"],
      data: null,
      descricao: this.baia["alimento"]["descricao"],
      estado: this.baia["alimento"]["estado"],
      auto: this.baia["alimento"]["auto"]
    };

    let sensorTemperatura = {
      currentTemperature: parseFloat(input.temperaturaNivel),
      temperatureSet: this.baia["temperatura"]["temperatureSet"],
      data: null,
      descricao: this.baia["temperatura"]["descricao"],
      estado: this.baia["temperatura"]["estado"],
      auto: this.baia["temperatura"]["auto"]
    };

    let sensorLuminosidade = {
      luminosidade: this.baia["luminosidade"]["luminosidade"],
      auto: this.baia["luminosidade"]["auto"],
      data: null,
      descricao: this.baia["luminosidade"]["descricao"],
      estado: this.baia["luminosidade"]["estado"]
    };

    // console.log(baiaEditada);
    this.baiaService.putBaia(this.id, baiaEditada).subscribe(data => console.log(data));
    this.aguaService.putAgua(this.sensorAguaId, sensorAgua).subscribe(data => console.log(data));
    this.alimentoService.putAlimento(this.sensorAlimentoId, sensorAlimento).subscribe(data => console.log(data));
    this.iluminacaoService.putIluminacao(this.sensorLuminosidadeId, sensorLuminosidade).subscribe(data => console.log(data));
    this.temperaturaService.putTemperatura(this.sensorTemperaturaId, sensorTemperatura).subscribe(data => console.log(data));
    this.router.navigate(['/home']);
  }

}

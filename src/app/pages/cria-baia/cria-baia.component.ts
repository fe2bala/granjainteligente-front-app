import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BaiaService } from 'src/app/services/baia.service';

@Component({
  selector: 'app-cria-baia',
  templateUrl: './cria-baia.component.html',
  styleUrls: ['./cria-baia.component.css']
})
export class CriaBaiaComponent implements OnInit {
  criaBaiaForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    aguaSet: new FormControl(''),
    comidaSet: new FormControl(''),
    temperaturaSet: new FormControl(''),
    iluminacao: new FormControl('')
  });

  constructor(private router: Router, private baiaService: BaiaService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    let input = this.criaBaiaForm.value;

    let baiaCompleta = {
      name: input.name,
      age: input.age,
      agua: {
        nivel: 100,
        nivelSet: parseInt(input.aguaSet),
        data: null,
        descricao: "sensor água",
        estado: true,
        auto: true,
        ph: 7.8
      },
      alimento: {
        nivel: 100,
        nivelSet: parseInt(input.comidaSet),
        data: null,
        descricao: "sensor comida",
        estado: true,
        auto: true
      },
      temperatura: {
        currentTemperature: parseInt(input.temperaturaSet),
        temperatureSet: parseInt(input.temperaturaSet),
        data: null,
        descricao: "sensor temperatura",
        estado: true,
        auto: true
      },
      luminosidade: {
        luminosidade: (input.iluminacao == 0) ? 'false' : 'true',
        auto: true,
        data: null,
        descricao: "sensor iluminacao",
        estado: true
      },
      status: true
    };

    console.log(baiaCompleta);
    this.baiaService.postBaia(baiaCompleta).subscribe(data => console.log(data));
    this.router.navigate(['/home']);
  }

}

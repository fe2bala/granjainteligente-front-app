import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.criaBaiaForm.value);
  }

}

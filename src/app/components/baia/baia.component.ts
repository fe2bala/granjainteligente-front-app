import { Component, OnInit, Input } from '@angular/core';
import { BaiaService } from 'src/app/services/baia.service';

@Component({
  selector: 'app-baia',
  templateUrl: './baia.component.html',
  styleUrls: ['./baia.component.css']
})
export class BaiaComponent implements OnInit {

  @Input() baia: object = {};
  constructor(private baiaService: BaiaService) { }

  ngOnInit() {

  }

  putBaia() {
    this.baiaService.putBaia(this.baia["id"], this.baia).subscribe((data) => {
      console.log(data);
    });
  }
}

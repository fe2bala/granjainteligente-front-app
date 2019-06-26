import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaiaService } from 'src/app/services/baia.service';

@Component({
  selector: 'app-baia-details',
  templateUrl: './baia-details.component.html',
  styleUrls: ['./baia-details.component.css']
})
export class BaiaDetailsComponent implements OnInit {

  public id: number;
  public baia: object = {};
  constructor(private route: ActivatedRoute, private baiaService: BaiaService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    // console.log("aaaaaaa")
    this.baiaService.getBaia(this.id).subscribe(data => {
      // console.log("aqqaa")
      this.baia = data
    });
  }

}

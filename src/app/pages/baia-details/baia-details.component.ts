import { Component, OnInit, OnDestroy } from '@angular/core';
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
  constructor(private route: ActivatedRoute, private baiaService: BaiaService) { 
    route.params.subscribe(val => {
      this.id = +this.route.snapshot.paramMap.get('id');
      setInterval(() => {
        this.baiaService.getBaia(this.id).subscribe((data) => {
          this.baia = data
        })
  
      }, 2000);
    });
  }
  
  
  ngOnInit() {
    

  }
  

}

import { Component, OnInit } from '@angular/core';
import { BaiaService } from 'src/app/services/baia.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private baiaService: BaiaService) { }
  private baias:Array<Object>=[];
  ngOnInit() {
    this.baiaService.getBaias().subscribe((data:Array<Object>)=> {this.baias=data});
  }

}

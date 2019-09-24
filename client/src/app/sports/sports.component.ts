import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { SportService } from '../services/sport.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SportsComponent implements OnInit {
  sportsList : any;
  constructor(private sportService: SportService) { }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.sportService.get().subscribe(res => {
      this.sportsList = res;
    },error =>{
      console.log(error)
    });
  }

}

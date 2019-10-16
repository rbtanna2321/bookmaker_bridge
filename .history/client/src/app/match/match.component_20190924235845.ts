import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatchService } from '../services/match.service';
@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MatchComponent implements OnInit {

  matchList: any;
  constructor(private matchService: MatchService ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.matchService.get().subscribe(res => {
      console.log(res);
      this.matchList = res;
    },error =>{
      console.log(error);
    });
  }
}

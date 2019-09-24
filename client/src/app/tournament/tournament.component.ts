import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { TournamentService } from '../services/tournament.service';
@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TournamentComponent implements OnInit {

  tournamentList: any;
  constructor(private tournamentService: TournamentService ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.tournamentService.get().subscribe(res => {
      console.log(res)
      this.tournamentList = res;
    },error =>{
      console.log(error)
    });
  }
}

import { Component, OnInit } from '@angular/core';
declare var $: any;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SportService } from '../../services/sport.service';
import { TournamentService } from '../../services/tournament.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss']
})
export class CreateTournamentComponent implements OnInit {
  errorMsg: ErrorMsg = new ErrorMsg();
  tournaments: Tournaments = new Tournaments();
  tournament: any;
  sportsList: any;

  constructor(private router: Router , private fb: FormBuilder , private tournamentService: TournamentService , private sportService: SportService ) { 
    this.myForm = this.fb.group({
      sport_id: this.fb.control('', Validators.required),
      tournament_name: this.fb.control('', Validators.required),
      market_id: this.fb.control('', Validators.required),
      is_actiive: this.fb.control('', Validators.required),
    });
  }

  myForm: FormGroup;
  
  ngOnInit() {
    this.getAll();
  }
  onSubmit(){
  //   console.log(this.myForm.value);
  //   // this.errorMsg.sports_name = this.errorMsg.market_id = "";
  //   // !this.sports.sports_name ? this.errorMsg.sports_name = " name is Required" : '';
  //   // !this.sports.market_id ? this.errorMsg.market_id = " Address is Required" : '';
  //   // if(!this.sports.sports_name || !this.sports.market_id){
  //   //   return;
  //   // }
    this.tournament = this.myForm.value;
    console.log(this.tournament)
    this.tournamentService.post(this.tournament).subscribe(res => {
    },error =>{
      console.log(error)
    });
    $("#successModal").modal('show');
  }
  getAll() {
    this.sportService.get().subscribe(res => {
      this.sportsList = res;
    },error =>{
      console.log(error)
    });
  }
 modelHide(){
  $("#successModal").modal('hide');
  this.router.navigate(['/tournaments']);
 }
}

class Tournaments {
  sport_id : String;
  tournament_name:String;
  market_id:String;
  is_actiive:String;
}

class ErrorMsg {
  sport_id : String;
  tournament_name:String;
  market_id:String;
  is_actiive:String;
}

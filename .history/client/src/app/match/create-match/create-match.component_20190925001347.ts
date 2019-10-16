import { Component, OnInit } from '@angular/core';
declare var $: any;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SportService } from '../../services/sport.service';
import { TournamentService } from '../../services/tournament.service';
import { MatchService } from '../../services/match.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent implements OnInit {

  errorMsg : ErrorMsg = new ErrorMsg();
  matches : Matches = new Matches();
  match : any;
  sportsList:any;
  tournamentList:any;

  constructor( private router: Router , private fb: FormBuilder , private tournamentService: TournamentService , private sportService: SportService , private matchService: MatchService) { 
    this.myForm = this.fb.group({
      sport_id: this.fb.control('', Validators.required),
      tournament_id: this.fb.control('', Validators.required),
      match_betfair_id: this.fb.control('', Validators.required),
      name: this.fb.control('', Validators.required),
      match_start_date_time: this.fb.control('', Validators.required),
      status: this.fb.control('', Validators.required),
      channel_no: this.fb.control('', Validators.required),
      is_show_live: this.fb.control('', Validators.required),
      is_play: this.fb.control('', Validators.required),
      is_actiive: this.fb.control('', Validators.required),
    });
  }

  myForm: FormGroup;
  
  ngOnInit() {
    this.getAll();
  }
  onSubmit() {
  //   console.log(this.myForm.value);
  //   // this.errorMsg.sports_name = this.errorMsg.market_id = "";
  //   // !this.sports.sports_name ? this.errorMsg.sports_name = " name is Required" : '';
  //   // !this.sports.market_id ? this.errorMsg.market_id = " Address is Required" : '';
  //   // if(!this.sports.sports_name || !this.sports.market_id){
  //   //   return;
  //   // }
    this.match = this.myForm.value;
    console.log(this.match)
    this.matchService.post(this.match).subscribe(res => {
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
  getAllTournament() {
    this.tournamentService.get().subscribe(res => {
      this.tournamentList = res;
    }, error => {
      console.log(error);
    });
  }
 modelHide(){
  $("#successModal").modal('hide');
  this.router.navigate(['/matches']);
 }
}

class Matches {
  sport_id: String;
  tournament_id: String;
  match_betfair_id: String;
  name: String;
  match_start_date_time: String;
  status: String;
  channel_no: String;
  is_show_live: String;
  is_play: String;
  is_actiive: String;
} 

class ErrorMsg {
  sport_id : String;
  tournament_id:String;
  match_betfair_id:String;
  name : String;
  match_start_date_time:String;
  status:String;
  channel_no : String;
  is_show_live:String;
  is_play:String;
  is_actiive:String;
}

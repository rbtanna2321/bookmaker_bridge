import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SportService } from '../../services/sport.service';
import { Router } from '@angular/router';
declare var $:any
@Component({
  selector: 'app-create-sport',
  templateUrl: './create-sport.component.html',
  styleUrls: ['./create-sport.component.scss']
})
export class CreateSportComponent implements OnInit {
  errorMsg : ErrorMsg = new ErrorMsg();
  sports : Sports = new Sports();
  sport : any;
  constructor(private router: Router ,  private fb: FormBuilder ,  private sportService: SportService ) { 
    this.myForm = this.fb.group({
      sport_name: this.fb.control('', Validators.required),
      market_id: this.fb.control('', Validators.required),
    });
  }

  myForm: FormGroup;
  
  ngOnInit() {
  
  }
  onSubmit(){
  //   console.log(this.myForm.value);
  //   // this.errorMsg.sports_name = this.errorMsg.market_id = "";
  //   // !this.sports.sports_name ? this.errorMsg.sports_name = " name is Required" : '';
  //   // !this.sports.market_id ? this.errorMsg.market_id = " Address is Required" : '';
  //   // if(!this.sports.sports_name || !this.sports.market_id){
  //   //   return;
  //   // }
    this.sport = this.myForm.value;
    console.log(this.sport)
    this.sportService.post(this.sport).subscribe(res => {
      console.log("res",res)
     
    },error =>{
      console.log(error)
    });
    $("#successModal").modal('show');
  }
 modelHide(){
  $("#successModal").modal('hide');
  this.router.navigate(['/sports']);
 }
}

class Sports {
  sports_name:String;
  market_id:String
}

class ErrorMsg {
  sports_name:String;
  market_id:String
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  score = 0;
  Lufuno1;Lufuno2;Lufuno3;
  Nemza3;Nemza2;Nemza1;
  Funi1;Funi2;Funi3;
  Code1;Code2;Code3;
  food1;food2;food3;
  Dog;
  Glorious;
  constructor(public navCtrl: NavController) {


  }
  submit(){


    if(this.Lufuno1 == true ){
    this.score = this.score +=1;
    }


     if(this.Nemza3 == true  ){
      this.score = this.score +=1;
    }
    if(this.Nemza1 == true){
      this.score = this.score +=1;

    }
    if(this.Code1 == true){
      this.score = this.score +=1;
    }

    if(this.food1 == true){
      this.score = this.score +=1;
    }
    if(this.Glorious == true){
      this.score = this.score += 1;
    }

    console.log(this.score);
  }
}

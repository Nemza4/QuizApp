import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Diego; Diego1;
  Major; Major1;
  Nzenza; Nzenza1;
  External; External1;
  Sosha; Sosha1;
  Humbu; Humbu1;
  Limpopo; Limpopo1;
  Mandoza; Mandoza1;
  Walker; Walker1;
  Animal1;Animal;
  score = 0;
  Lufuno1;Lufuno2;Lufuno3;
  Nemza3;Nemza2;Nemza1;
  Funi1;Funi2;Funi3;
  code1;Code2;Code3;
  food1;food2;food3;
  Dog;dog1;
  Glorious: string;
  BullDog: string;
  constructor(public navCtrl: NavController) {
this.Animal1 = "Dog"
this.Walker1 = "Glorious"
this.Mandoza1 = "Tweety"
this.Limpopo1 = "Pretoria"
this.Humbu1 = "Rand"
this.Sosha1 = "Pennsylvania"
this.External1 = "Greenland"
this.Nzenza1 = "Tugela"
this.Major1 = "Pacific"
this.Diego1 = "Madrid"
  }
  submit(){


    if(this.Lufuno1 == true ){
    this.score +=1;
    }


     if(this.Funi1 == true  ){
      this.score +=1;
    }
    if(this.Nemza1 == true){
      this.score +=1;

    }
    if(this.code1 == true){
       this.score +=1;
    }

    if(this.food1 == true){
       this.score +=1;
    }
    if(this.Animal == this.Animal1)
    {
      this.score +=1;
     
    }
    
  if(this.Walker == this.Walker1)
  this.score +=1;

  if(this.Mandoza == this.Mandoza1)
  this.score +=1;

  if(this.Limpopo == this.Limpopo1)
  this.score +=1;

  if(this.Humbu1 == this.Humbu)
  this.score +=1;
  
  if(this. Sosha1 == this.Sosha)
  this.score +=1; 

  if(this. External1 == this.External)
  this.score +=1;

  if(this.Nzenza1  == this.Nzenza)
  this.score +=1;

  if(this.Major1  == this.Major)
  this.score +=1;

  if(this.Diego1 == this.Diego)
  this.score +=1;
  {

  }

    console.log(this.score);
  }
}

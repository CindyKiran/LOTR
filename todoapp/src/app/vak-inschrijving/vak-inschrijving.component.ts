import { Component, OnInit } from '@angular/core';
import { Vak } from '../Vak';
import { OpleidingService } from '../opleiding.service';
import { Opleiding } from '../Opleiding';
import { StudentService } from '../student.service';
import { Student } from '../Student';
import { getDefaultService } from 'selenium-webdriver/opera';
import { VakService } from '../vak.service';


@Component({
  selector: 'app-vak-inschrijving',
  templateUrl: './vak-inschrijving.component.html',
  styleUrls: ['./vak-inschrijving.component.css']
})
export class VakInschrijvingComponent implements OnInit {

  userOpleiding :String;
  userOpleidingId : number;
  vakken : string;
  
  public getUser(){
    this.userOpleiding=localStorage.getItem('opleiding');
    if(this.userOpleiding == 'sorcerer'){
      this.userOpleidingId = 1;
      console.log(this.userOpleidingId);
    } else if (this.userOpleiding == 'healer'){
      this.userOpleidingId = 2;
      console.log(this.userOpleidingId);
    } else if (this.userOpleiding == 'warrior'){
      this.userOpleidingId = 3;
      console.log(this.userOpleidingId);
    } else if (this.userOpleiding == 'tanker'){
      this.userOpleidingId = 4;
      console.log(this.userOpleidingId);
    } else if (this.userOpleiding == 'ranger'){
      this.userOpleidingId = 5;
      console.log(this.userOpleidingId);
    } else if (this.userOpleiding == 'assassin'){
      this.userOpleidingId = 6;
      console.log(this.userOpleidingId);
    } else{
      this.userOpleidingId = 7;
      console.log(this.userOpleidingId);
    }
  }

  constructor(private opleidingService: OpleidingService, private studentService: StudentService, private vakService: VakService) {

  }

  opleiding: Opleiding;


  ngOnInit() {
    
    this.getUser();
    this.displayVakken();
  }


  displayVakken(){
    this.opleidingService.displayVakken(this.userOpleidingId).subscribe(
      opleiding => {
        console.log(opleiding);
      this.opleiding = opleiding;
      
    },
    err => {
      console.log(err);
    });
  }

  inschrijven(event){
    console.log("ingeschreven!");
    var naam;
    var periode;
    var maxStudiePunten;
    var maxStudenten;
    var isVerplicht;
    var rasEis;
    var idString = localStorage.getItem('id');
    var idNumber = Number(idString);
    console.log(idNumber);
    this.vakService.saveVak(new Vak(idNumber, naam, periode,maxStudiePunten, maxStudenten,isVerplicht,rasEis, true)).subscribe();
  }
}



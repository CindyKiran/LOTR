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
  text: String = "Inschrijven";

  ngOnInit() {
    
    this.getUserOpleiding();
    this.displayVakken();
    //this.inschrijven();
  }

  // public changeButton(vak : Vak, student:Student){
  //   if(vak.id == student.ingeschrevenVakken.)
  // }
  
  //convert string opleiding to number
  public getUserOpleiding(){
    this.userOpleiding=localStorage.getItem('opleiding');
    console.log("check opleiding again:" + this.userOpleiding);
    if(this.userOpleiding == '1'){
      this.userOpleidingId = 1;
      console.log(this.userOpleidingId);
    } else if (this.userOpleiding == '2'){
      this.userOpleidingId = 2;
      console.log(this.userOpleidingId);
    } else if (this.userOpleiding == '3'){
      this.userOpleidingId = 3;
      console.log(this.userOpleidingId);
    } else if (this.userOpleiding == '4'){
      this.userOpleidingId = 4;
      console.log(this.userOpleidingId);
    } else if (this.userOpleiding == '5'){
      this.userOpleidingId = 5;
      console.log(this.userOpleidingId);
    } else if (this.userOpleiding == '6'){
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

  inschrijven(vak: Vak){
   // this.vakService.updateVak(vak.id, vak).subscribe();
   var studentIdString = localStorage.getItem('id');
   var studentIdNumber = Number(studentIdString);
   this.studentService.inschrijvenVak(studentIdNumber,vak.id).subscribe();
   console.log("student id:" +studentIdNumber + "vak id:" + vak.id)
  }

}



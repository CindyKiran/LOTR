import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Student} from '../Student';
import {StudentService} from '../student.service';
import { Router } from '@angular/router';
import { Opleiding } from '../Opleiding';
import { University } from '../University';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:  [StudentService]
})
export class RegisterComponent implements OnInit {
  constructor(public fb: FormBuilder, public studentService: StudentService, private router: Router) {
  }
  regSuccess: boolean = false;
  emptyBoxes: boolean = false;
  @Input()
    student: Student[];

  public dataForm = this.fb.group({
    firstName:  ['', Validators.required],
    lastName:  ['', Validators.required],
    userName: ['', Validators.required],
    passWord: ['', Validators.required],
    place:  ['', Validators.required],
    creature: ['', Validators.required],
    age: ['', Validators.required],
    opleiding: ['', Validators.required]
  });

  ngOnInit() {
  }
  public validateUserName(event) {
    this.studentService.findAll().subscribe(
      (student) => {
        this.student = student;
        var userNameTaken: boolean;
        userNameTaken = false;
        for(let x=0; x<this.student.length; x++){
          if (this.student[x].userName == this.dataForm.controls['userName'].value) {
            userNameTaken = true;
            console.log("Username is already taken!");
            alert("Username is already taken, choose another one")
            break;
          }
        }
        if(!userNameTaken){
          console.log("username te gebruiken");
          this.saveData();
          localStorage.setItem('user', (this.dataForm.controls['userName'].value))
        }
      })
  }

  public saveData() {
    const firstName = this.dataForm.controls['firstName'].value;
    const lastName = this.dataForm.controls['lastName'].value;
    const userName = this.dataForm.controls['userName'].value;
    const passWord = this.dataForm.controls['passWord'].value;
    const place = this.dataForm.controls['place'].value;
    const creature = this.dataForm.controls['creature'].value;
    const age = this.dataForm.controls['age'].value;
    const vakken = null;
    const ingeschrevenVakken = null;
    const opleiding = this.dataForm.controls['opleiding'].value;
    var uploads : string;
    var opleidingID;
    university:University;
  
    var regSuccess: boolean;
    regSuccess = false;
    var emptyBoxes: boolean;
    emptyBoxes = false;

    //convert opleiding string to opleidingID number
    if(opleiding == "sorcerer"){
      opleidingID = 1;
    } else if (opleiding == "healer"){
      opleidingID = 2;
    } else if (opleiding == "scientist"){
      opleidingID = 3;
    } else if (opleiding == "warrior"){
      opleidingID = 4;
    } else if (opleiding == "tanker"){
      opleidingID = 5;
    } else if (opleiding == "ranger"){
      opleidingID = 6;
    } else {
      opleidingID =7;
    }

    //check if answer left blank
    if(this.dataForm.invalid){  
    console.log("error!!!")
      this.emptyBoxes = true;
    } else {
      this.studentService.saveUser(new Student(0, firstName, lastName, userName, passWord, place, creature, age, new Opleiding(opleidingID, null, null, null), vakken, ingeschrevenVakken, uploads, (new University(0)))).subscribe();
      regSuccess = true;
    }
  }
}

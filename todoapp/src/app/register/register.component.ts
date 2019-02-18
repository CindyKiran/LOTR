import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Student} from '../Student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(public fb: FormBuilder, public studentService: StudentService) {
  }

  public dataForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    userName: ['', Validators.required],
    passWord: ['', Validators.required],
    place: ['', Validators.required],
    creature: ['', Validators.required],
    age: ['', Validators.required]
  });

  ngOnInit() {
  }

  regSuccess: boolean = false;
  emptyBoxes: boolean = false;

  public saveData() {

    const firstName = this.dataForm.controls['firstName'].value;
    const lastName = this.dataForm.controls['lastName'].value;
    const userName = this.dataForm.controls['userName'].value;
    const passWord = this.dataForm.controls['passWord'].value;
    const place = this.dataForm.controls['place'].value;
    const creature = this.dataForm.controls['creature'].value;
    const age = this.dataForm.controls['age'].value;

    if (userName.length == 0 || passWord.length == 0 || firstName == 0) {
      console.log("error!!!")
      this.emptyBoxes = true;
    } else {
      this.studentService.saveUser(new Student(0, firstName, lastName, userName, passWord, place, creature, age)).subscribe(
      );
      this.regSuccess = true;
    }
  }
}

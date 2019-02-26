import {Component, Input, OnInit} from '@angular/core';
import { StudentService} from '../student.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Student} from '../Student';
import { Router } from '@angular/router';
import { OpleidingVakkenComponent } from '../opleiding-vakken/opleiding-vakken.component';
import { Opleiding } from '../Opleiding';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:  [StudentService]
})
export class Login implements OnInit {
  constructor(public fb: FormBuilder, private studentService: StudentService, private router: Router) {
  }
  redError: boolean = false;

  public dataForm = this.fb.group({
    firstName:  ['', Validators.required],
    lastName:  ['', Validators.required],
    userName: ['', Validators.required],
    passWord: ['', Validators.required],
    place:  ['', Validators.required],
    creature: ['', Validators.required],
    age: ['', Validators.required],
  });

  ngOnInit() {
  }

  public loginData(event) {
    const firstName = this.dataForm.controls['firstName'].value;
    const lastName = this.dataForm.controls['lastName'].value;
    const userName = this.dataForm.controls['userName'].value;
    const passWord = this.dataForm.controls['passWord'].value;
    const place = this.dataForm.controls['place'].value;
    const creature = this.dataForm.controls['creature'].value;
    const age = this.dataForm.controls['age'].value;
    const vakken=null;
    var opleiding:Opleiding;

    this.studentService.authenticateStudent(new Student(0, firstName, lastName, userName, passWord, place, creature, age, opleiding,vakken)).subscribe(
      (result: Student) => {
        console.log(result)
        if (result != null) {
          this.studentService.currentStudent = result;
          localStorage.setItem('first', result.firstName);
          localStorage.setItem('last', result.lastName);
          localStorage.setItem('userName', result.userName);
          localStorage.setItem('id', result.id.toLocaleString());
          this.router.navigate(['blackboard']);
        } else if (result === null) {
          this.router.navigate([''])
          console.log("invalid username and/or password")
          this.redError = true;
        }
      }
    );
  }
}

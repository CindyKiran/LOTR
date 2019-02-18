
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Docent} from '../Docent';
import {DocentService} from '../docent.service';


@Component({
  selector: 'app-docent-register',
  templateUrl: './docent-register.component.html',
  styleUrls: ['./docent-register.component.css']
})
export class DocentRegisterComponent implements OnInit {

  constructor(public fb: FormBuilder, private docentService: DocentService) {
  }

  public dataForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    userName: ['', Validators.required],
    passWord: ['', Validators.required],
    place: ['', Validators.required],
    creature: ['', Validators.required],
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

    if (userName.length == 0 || passWord.length == 0 || firstName == 0) {
      console.log("error!!!")
      this.emptyBoxes = true;
    } else {
      this.docentService.saveUser(new Docent(0, firstName, lastName, userName, passWord, place, creature)).subscribe(
      );
      this.regSuccess = true;
    }
  }
}

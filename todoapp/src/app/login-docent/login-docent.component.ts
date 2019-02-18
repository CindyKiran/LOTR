
import {Component, Input, OnInit} from '@angular/core';
import { DocentService} from '../docent.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Docent} from '../Docent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-docent',
  templateUrl: './login-docent.component.html',
  styleUrls: ['./login-docent.component.css']
})
export class LoginDocentComponent implements OnInit {

  constructor(public fb: FormBuilder, private docentService: DocentService, private router: Router) { }

  public dataForm = this.fb.group({
    firstName:  ['', Validators.required],
    lastName:  ['', Validators.required],
    userName: ['', Validators.required],
    passWord: ['', Validators.required],
    place:  ['', Validators.required],
    creature: ['', Validators.required]
  });

  ngOnInit() {
  }
  
  redError: boolean = false;

  public loginData(event) {

    const firstName = this.dataForm.controls['firstName'].value;
    const lastName = this.dataForm.controls['lastName'].value;
    const userName = this.dataForm.controls['userName'].value;
    const passWord = this.dataForm.controls['passWord'].value;
    const place = this.dataForm.controls['place'].value;
    const creature = this.dataForm.controls['creature'].value;

    this.docentService.authenticate(new Docent(0, firstName, lastName, userName, passWord, place, creature)).subscribe(result => {
        console.log(result)
        if (result == true) {
          this.router.navigate(['login-docent'])
        } else if (result == false) {
          this.router.navigate(['login-docent'])
          this.redError = true;
        }
      }
    );
  }
}

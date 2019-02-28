import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [StudentService]
})
export class ContactComponent implements OnInit {

  constructor(public fb: FormBuilder, private studentService: StudentService) { }

  public dataForm = this.fb.group({
    subject: ['', Validators.required],
    question: ['', Validators.required],
  });

  ngOnInit() {
  }
  public displayFirst(){
    return localStorage.getItem('first');
  }
  public displayLast(){
    return localStorage.getItem('last');
  }
  emptyBoxes: boolean = false;
  contactSuccess: boolean = false;

  public sendForm(){
    const subject = this.dataForm.controls['subject'].value;
    const question = this.dataForm.controls['question'].value;

    if(subject.length == 0 || question.length == 0){
      console.log("error");
      this.emptyBoxes = true;
    }else{
      console.log("success");
      this.contactSuccess = true;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import { Login} from '../login/login.component';
import {FormBuilder, Validators} from '@angular/forms';
import {Student} from '../Student';

@Component({
  selector: 'app-blackboard',
  templateUrl: './blackboard.component.html',
  styleUrls: ['./blackboard.component.css']
})
export class BlackboardComponent implements OnInit {

  constructor(public fb: FormBuilder, public studentService: StudentService) {
  }

  ngOnInit() {
  }
  public displayFirst(){
    return localStorage.getItem('first');
  }
  public displayLast(){
    return localStorage.getItem('last');
  }
}

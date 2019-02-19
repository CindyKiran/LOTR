import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import { Login} from '../login/login.component';

@Component({
  selector: 'app-blackboard',
  templateUrl: './blackboard.component.html',
  styleUrls: ['./blackboard.component.css']
})
export class BlackboardComponent implements OnInit {

  constructor(public studentService: StudentService) {
  }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }
}

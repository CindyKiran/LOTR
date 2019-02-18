import { Component, OnInit } from '@angular/core';
import {Student} from '../Student';
import { StudentService} from '../student.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers:  [StudentService]
})
export class TodoListComponent implements OnInit {

  students: Student[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.findAll().subscribe(
      students => {
        this.students = students;
      },
      err => {
        console.log(err);
      }
    );
  }
  delete(id) {
    this.studentService.delete(id).subscribe(
      () => this.getAllStudents()
    );
  }
}

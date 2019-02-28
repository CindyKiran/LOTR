import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../Student';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  student:Student;
  
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.displayUser();
  }

  displayUser(){
    var id = Number(localStorage.getItem('id'));
    this.studentService.displayUser(id).subscribe(
      student => {
        this.student= student;
      
    },
    err => {
      console.log(err);
    });
  }

}

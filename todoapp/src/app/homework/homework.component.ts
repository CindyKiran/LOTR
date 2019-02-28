import { Component, OnInit } from '@angular/core';
import {FileUploader, FileSelectDirective} from 'ng2-file-upload';
import {StudentService} from '../student.service';
import {Student} from '../Student';

const URL = 'http://localhost:8080/uploadFile';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'file'});
  constructor(private studentService: StudentService){}
  student: Student[];
  currentStudent: Student;
  fb: FileReader;

  ngOnInit() {
    this.studentService.findbyUserName(localStorage.getItem('userName')).subscribe(
      result => {
        this.currentStudent = result.pop();
      }
    )
  }
  updateUploads(event){
    this.uploader.uploadAll();
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      // console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');

      console.log( item._file.name);
      this.currentStudent.uploads = ( item._file.name);
      this.studentService.uploadFile(this.currentStudent).subscribe();
    };
    // this.currentStudent.uploads = event.toLocaleString();
    // this.studentService.uploadFile(this.currentStudent).subscribe();

  }
  // updateUp() {
  //   this.studentService.findAll().subscribe(
  //     (student)=>{
  //       this.student = student;
  //       var findId: boolean;
  //       findId = false;
  //       for(let x = 0; x<this.student.length; x++){
  //         if(this.student[x].id == this.currentStudent.id){
  //           findId = true;
  //           this.studentService.patchUploads(this.student[x].uploads).subscribe();
  //         }
  //       }
  //     }
  //   )
  // }
}



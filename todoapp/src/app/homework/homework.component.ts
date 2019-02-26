import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
class FileHomeWork {
  pending: boolean = false;
  status: string = 'init';
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {
  selectedFile: FileHomeWork;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(fileInput: any){
    const file : File = fileInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event : any) => {
      this.selectedFile = new FileHomeWork(event.target.result, file);
      this.studentService.uploadFile(this.selectedFile.file).subscribe(
        (res)=>{
          this.onSuccess();
        },
        (err)=>{
          this.onError();
        })
    });
    reader.readAsDataURL(file);
  }
}
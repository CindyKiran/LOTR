import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {PdfViewerComponent} from 'ng2-pdf-viewer';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {
  uploadSuccess: boolean;

  constructor(private studentService: StudentService) { }
  ngOnInit() {
  }

  public path;
  url: any;
  public message: string;

  preview(files) {
    if (files.length === 0)
      return;

    var reader = new FileReader();
    this.path = files;

    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
      this.uploadSuccess = true;
    };
    console.log(files);
    this.studentService.uploadFile(files).subscribe(
      (res)=>{
      },
      (err)=>{;
      })
  }

  pdfSrc: string = '/pdf-test.pdf';

  upload(fileInput: any) {
    var file : File = fileInput.files[0];
    file = fileInput.target.files[0];
  }
}

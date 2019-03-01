import { Component, OnInit } from '@angular/core';
import { Docent } from '../Docent';
import { DocentService } from '../docent.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  docenten : Docent[];
  imgUrl: String;
 

  constructor(private docentService: DocentService) { }

  ngOnInit() {
    this.displayTeachers();
  }

  displayTeachers(){
    this.docentService.findAll().subscribe(
      docent => {
        this.docenten = docent;
        console.log(docent);
    },
    err => {
      console.log(err);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Docent } from '../Docent';
import { DocentService } from '../docent.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  docent1: Docent;
  docent2: Docent;
  docent3: Docent;
  docent4: Docent;
  docent : Docent[];

  constructor(private docentService: DocentService) { }

  ngOnInit() {
    this.displayTeachers();
  }

  displayTeachers(){
    this.docentService.findAll().subscribe(
      docent => {
        this.docent1 = docent[1];
        this.docent2 = docent[2];
        this.docent3 = docent[3];
        this.docent4 = docent[4];
    },
    err => {
      console.log(err);
    });
  }

}

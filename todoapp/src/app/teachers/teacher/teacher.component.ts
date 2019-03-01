import { Component, OnInit, Input } from '@angular/core';
import { Docent } from 'src/app/Docent';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
@Input("teacher") docent : Docent;
imgUrl: String;

  constructor() { }
  ngOnInit() {
    this.changePicture();
  }

    changePicture(){
    if(this.docent.id == 1){
      this.imgUrl = "https://pokemon-mart.000webhostapp.com/LOTR/gandalfpicture.jpg";
    } else if (this.docent.id == 2){
      this.imgUrl = "https://pokemon-mart.000webhostapp.com/LOTR/aragorn.jpg";
    } else if (this.docent.id == 3){
      this.imgUrl = "https://pokemon-mart.000webhostapp.com/LOTR/bilbo.jpg";
    } else if (this.docent.id == 4){
      this.imgUrl = "https://pokemon-mart.000webhostapp.com/LOTR/sauron.jpg";
    } else if (this.docent.id == 5){
      this.imgUrl = "https://pokemon-mart.000webhostapp.com/LOTR/elrond.jpg";
    } else if (this.docent.id == 6){
      this.imgUrl = "https://pokemon-mart.000webhostapp.com/LOTR/arwen.jpg";
    } else if (this.docent.id == 7){
      this.imgUrl = "https://pokemon-mart.000webhostapp.com/LOTR/gimli.jpg";
    } else if (this.docent.id == 8){
      this.imgUrl = "https://pokemon-mart.000webhostapp.com/LOTR/legolas.jpg";
    } else if (this.docent.id == 9){
      this.imgUrl = "https://pokemon-mart.000webhostapp.com/LOTR/treebeard.jpg";
    } else{
      this.imgUrl = "https://pokemon-mart.000webhostapp.com/LOTR/bard.jpg";
    }
  }

}

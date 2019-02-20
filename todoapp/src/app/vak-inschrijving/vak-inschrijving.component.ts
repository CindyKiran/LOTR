import { Component, OnInit } from '@angular/core';
import { Vak } from '../Vak';
import { OpleidingService } from '../opleiding.service';
import { Opleiding } from '../Opleiding';


@Component({
  selector: 'app-vak-inschrijving',
  templateUrl: './vak-inschrijving.component.html',
  styleUrls: ['./vak-inschrijving.component.css']
})
export class VakInschrijvingComponent implements OnInit {


  constructor(private opleidingService: OpleidingService) {
  }

  todos: Opleiding[];


  ngOnInit() {
    this.test
  }

  test(){
    this.opleidingService.displayVakken().subscribe(
      todos => {
      this.todos = todos;
    },
    err => {
      console.log(err);
    }
);
  }
}



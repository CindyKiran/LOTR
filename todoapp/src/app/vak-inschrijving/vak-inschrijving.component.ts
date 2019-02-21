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

  opleiding: Opleiding;


  ngOnInit() {
    this.test();
  }

  test(){

    this.opleidingService.displayVakken(5).subscribe(
      opleiding => {
        console.log(opleiding);
      this.opleiding = opleiding;
      
    },
    err => {
      console.log(err);
    }
);
  }
}



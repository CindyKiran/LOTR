import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Opleiding} from '../Opleiding';
import {OpleidingService} from '../opleiding.service';
import { VakService } from '../vak.service';
import { Vak } from '../Vak';

@Component({
  selector: 'app-opleiding-vakken',
  templateUrl: './opleiding-vakken.component.html',
  styleUrls: ['./opleiding-vakken.component.css']
})
export class OpleidingVakkenComponent implements OnInit {

  constructor(public fb: FormBuilder, public opleidingService: OpleidingService, public vakService: VakService) {
  }

  public dataForm = this.fb.group({
    naam: ['', Validators.required],
    rasEis: ['', Validators.required],
    maxStudiepunten: ['', Validators.required],
    docent: ['', Validators.required],
  });

  ngOnInit() {
  }

  public saveOpleiding(event) {

    const naam = this.dataForm.controls['naam'].value;
    const rasEis = this.dataForm.controls['rasEis'].value;
    const maxStudiepunten = this.dataForm.controls['maxStudiepunten'].value;

      this.opleidingService.saveOpleiding(new Opleiding(0, naam, rasEis,maxStudiepunten)).subscribe();
    
  }

  public saveVak(event) {

    const naam = this.dataForm.controls['naam'].value;
    const rasEis = this.dataForm.controls['rasEis'].value;
    const maxStudiepunten = this.dataForm.controls['maxStudiepunten'].value;
    const docent = this.dataForm.controls['docent'].value;

    this.vakService.saveVak(new Vak(0, naam, rasEis,maxStudiepunten, docent)).subscribe();
    
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
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
  form: FormGroup;
  orders = [
    { id: "human", name: 'Human' },
    { id: "elf", name: 'Elf' },
    { id: "sorcerer", name: 'Sorcerer' },
    { id: "hobbit", name: 'Hobbit' },
    { id: "dwarf", name: 'Dwarf' },
    { id: "orc", name: 'Orc' },
  ];

  constructor(public fb: FormBuilder, public opleidingService: OpleidingService, public vakService: VakService, private formBuilder: FormBuilder) {
    const controls = this.orders.map(c => new FormControl(false));
    controls[0].setValue(true);

    this.form = this.formBuilder.group({
      orders: new FormArray(controls, this.minSelectedCheckboxes(1))
    });
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
    const rasEis = this.form.value.orders
      .map((v, i) => v ? this.orders[i].id : null)
      .filter(v => v !== null);
    const maxStudiepunten = 50;

  this.opleidingService.saveOpleiding(new Opleiding(0, naam, rasEis,maxStudiepunten)).subscribe();
    
  }

  public saveVak(event) {
    const naam = this.dataForm.controls['naam'].value;
    const docent = this.dataForm.controls['docent'].value;
    const maxStudiepunten = 5;
    const rasEis = this.form.value.orders
      .map((v, i) => v ? this.orders[i].id : null)
      .filter(v => v !== null);
    const isVerplicht = false;  
    const periode = 1;
   this.vakService.saveVak(new Vak(0, naam, periode,rasEis,maxStudiepunten, isVerplicht, docent)).subscribe();
    
  }

  minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        .map(control => control.value)
        .reduce((prev, next) => next ? prev + next : prev, 0);
  
      return totalSelected >= min ? null : { required: true };
    };
  return validator;
  }
}

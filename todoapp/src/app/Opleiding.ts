import { Docent } from "./Docent";
import { Vak } from "./Vak";
import { University } from "./University";
import { NumberFormatStyle } from "@angular/common";

export class Opleiding{

    id: number = 0;
    naam: string;
    rasEis :string;
    afdeling: string;
    maxStudiePunten: number;
    docenten: Docent[];
    university: University;
    vakken: Vak[];

    
    constructor(id: number, naam: string, rasEis :string, maxStudiePunten: number){
      this.id = id;
      this.naam = naam;
      this.rasEis = rasEis;
      this.maxStudiePunten = maxStudiePunten;
    }


  }

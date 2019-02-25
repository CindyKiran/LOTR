import { Opleiding } from "./Opleiding";

export class Vak{

    id: number = 0;
    naam : string;
    periode: number;
    maxStudiePunten: number;
    maxStudenten: number;
    isVerplicht : boolean;
    //docent: string;
    opleidingen : Opleiding[];
    rasEis: string;

    constructor(id: number, naam : string, periode: number, maxStudiePunten: number, maxStudenten: number, isVerplicht : boolean, rasEis: string){
      this.id = id;
      this.naam = naam;
      this.periode = periode;
      this.maxStudiePunten = maxStudiePunten;
      this.maxStudenten = maxStudenten;
      this.isVerplicht = isVerplicht;
      //this.docent = docent;
      this.rasEis = rasEis;
    }
  }
  
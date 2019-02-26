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
    isIngeschreven: boolean;

    constructor(id: number, naam : string, periode: number, maxStudiePunten: number, maxStudenten: number, isVerplicht : boolean, rasEis: string, isIngeschreven: boolean){
      this.id = id;
      this.naam = naam;
      this.periode = periode;
      this.maxStudiePunten = maxStudiePunten;
      this.maxStudenten = maxStudenten;
      this.isVerplicht = isVerplicht;
      //this.docent = docent;
      this.rasEis = rasEis;
      this.isIngeschreven = isIngeschreven;
    }
  }
  
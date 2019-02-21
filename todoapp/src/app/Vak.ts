import { Opleiding } from "./Opleiding";

export class Vak{

    id: number = 0;
    naam : string;
    periode: number;
    maxStudiePunten: number;
    maxStudenten: number;
    isVerplicht : boolean;
    docent: string;
    opleidingen : Opleiding[];

    constructor(id: number = 0, naam : string, periode: number, maxStudiePunten: number, maxStudenten: number, isVerplicht : boolean, docent: string){

    }
  }
  
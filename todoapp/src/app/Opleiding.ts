import { Docent } from "./Docent";
import { Vak } from "./Vak";
import { University } from "./University";

export class Opleiding{

    id: number = 0;
    naam: string;
    rasEis :string;
    afdeling: string;
    maxStudiePunten: number;
    docenten: Docent[];
    university: University;
    vakken: Vak[];

    constructor(id: number = 0, naam: string, rasEis :string, maxStudiePunten: number){
    }
  }

export class Vak{

    id: Number = 0;
    naam: String;
    rasEis :String;
    maxStudiepunten: Number
    docent: String;
  
    constructor(id: Number, naam: String, rasEis: String, maxStudiepunten: Number, docent: String) {
      this.id = id;
      this.naam = naam;
      this.rasEis = rasEis;
      this.maxStudiepunten = maxStudiepunten;
      this.docent = docent;
    }
  }
  
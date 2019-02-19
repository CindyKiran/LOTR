export class Opleiding{

    id: Number = 0;
    naam: String;
    rasEis :String;
    maxStudiepunten: Number

  
    constructor(id: Number, naam: String, rasEis: String, maxStudiepunten: Number) {
      this.id = id;
      this.naam = naam;
      this.rasEis = rasEis;
      this.maxStudiepunten = maxStudiepunten;
    }
  }
  
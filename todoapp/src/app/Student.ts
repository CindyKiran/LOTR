import { Vak } from "./Vak";
import { Opleiding } from "./Opleiding";

export class Student{

  id: Number = 0;
  firstName: string;
  lastName: string;
  userName: string;
  passWord: string;
  place: string;
  creature: string;
  age: number;
  opleiding: Opleiding;
  vakken: Vak[];
  uploads: string;
  ingeschrevenVakken: Vak[];

  constructor(id: number, firstName: string, lastName: string, userName: string, passWord: string, place: string, creature: string, age: number, opleiding: Opleiding, vakken: Vak[], ingeschrevenVakken:Vak[],uploads: string) {

  

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.passWord = passWord;
    this.place = place;
    this.creature = creature;
    this.age = age;
    this.opleiding = opleiding;
    this.vakken = vakken;
    this.uploads = uploads;
    this.ingeschrevenVakken = ingeschrevenVakken;
  }
}

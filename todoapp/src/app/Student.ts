import { Vak } from "./Vak";

export class Student{

  id: Number = 0;
  firstName: string;
  lastName: string;
  userName: string;
  passWord: string;
  place: string;
  creature: string;
  age: number;
  opleiding: string;
  vakken: Vak[];


  constructor(id: number, firstName: string, lastName: string, userName: string, passWord: string, place: string, creature: string, age: number, opleiding: string, vakken: Vak[]) {
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
  }
}

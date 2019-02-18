export class Student{

  id: Number = 0;
  firstName: String;
  lastName: String;
  userName: String;
  passWord: String;
  place: String;
  creature: String;
  age: Number;

  constructor(id: Number, firstName: String, lastName: String, userName: String, passWord: String, place: String, creature: String, age: Number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.passWord = passWord;
    this.place = place;
    this.creature = creature;
    this.age = age;
  }
}

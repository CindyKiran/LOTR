
export class Todo {

  id: Number = 0;
  firstName: String;
  lastName: String;
  userName: String;
  passWord: String;
  place: String;
  creature: String;

  constructor(id: Number, firstName: String, lastName: String, userName: String, passWord: String, place: String, creature: String) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.passWord = passWord;
    this.place = place;
    this.creature = creature;
  }
}

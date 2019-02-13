
export class Todo {

  id: Number = 0;
  firstName: String;
  userName: String;
  passWord: String;


  constructor(id: Number, firstName: String, userName: String, passWord: String) {
    this.id = id;
    this.userName = userName;
    this.passWord = passWord;
    this.firstName = firstName;
  }
}

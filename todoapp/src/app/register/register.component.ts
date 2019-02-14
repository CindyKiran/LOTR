import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoServiceService } from '../todo-service.service';
import { Router } from '@angular/router';
import {Todo} from '../Todo';
import {TodoListComponent} from '../todo-list/todo-list.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public fb: FormBuilder, private todoService: TodoServiceService) {}

  creatures: ['dwarf', 'elf', 'human', 'orc', 'hobbit'];

  public todoForm = this.fb.group({
    firstName:  ['', Validators.required],
    lastName:  ['', Validators.required],
    userName: ['', Validators.required],
    passWord: ['', Validators.required],
    place:  ['', Validators.required],
    creature:  ['', Validators.required],
  });

  ngOnInit() {
  }

  regSuccess: boolean = false;
  emptyBoxes: boolean = false;

  public saveTodo() {

    const firstName = this.todoForm.controls['firstName'].value;
    const lastName = this.todoForm.controls['lastName'].value;
    const userName = this.todoForm.controls['userName'].value;
    const passWord = this.todoForm.controls['passWord'].value;
    const place = this.todoForm.controls['place'].value;
    const creature = this.todoForm.controls['creature'].value;

      if(userName.length == 0 || passWord.length ==0 || firstName ==0){
        console.log("error!!!")
        this.emptyBoxes = true;
      } else{
        this.todoService.saveUser(new Todo(0, firstName, lastName, userName, passWord, place, creature)).subscribe(
          );
        this.regSuccess =true;
      }
  }
}

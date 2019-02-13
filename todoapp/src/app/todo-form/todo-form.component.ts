import {Component, Input, OnInit} from '@angular/core';
import {TodoServiceService} from '../todo-service.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Todo} from '../Todo';
import {TodoListComponent} from '../todo-list/todo-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  providers:  [TodoServiceService]
})
export class TodoFormComponent implements OnInit {

  

  constructor(public fb: FormBuilder, private todoService: TodoServiceService, private router: Router) {
  }

  public todoForm = this.fb.group({
    userName: ['', Validators.required],
    passWord: ['', Validators.required],
    firstName:  ['', Validators.required]
  });

  ngOnInit() {
  }

  public loginTodo(event) {

    const userName = this.todoForm.controls['userName'].value;
    const passWord = this.todoForm.controls['passWord'].value;
    const firstName = this.todoForm.controls['firstName'].value;

    this.todoService.authenticate(new Todo(0, firstName, userName, passWord)).subscribe(result => {
      console.log(result)
      if(result == true){
        this.router.navigate(['blackboard'])
      } else if(result == false){
        this.router.navigate([''])
        this.redError = true;
      }
    }
    );
  }

  redError: boolean = false;
}

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

  public todoForm = this.fb.group({
    userName: ['', Validators.required],
    passWord: ['', Validators.required]
  });

  ngOnInit() {
  }

  public saveTodo() {

    const userName = this.todoForm.controls['userName'].value;
    const passWord = this.todoForm.controls['passWord'].value;

    this.todoService.saveUser(new Todo(0, userName, passWord)).subscribe(
    );
  }

}

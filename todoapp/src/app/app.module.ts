import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import { RegisterComponent } from './register/register.component';
import { BlackboardComponent } from './blackboard/blackboard.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    RegisterComponent,
    BlackboardComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

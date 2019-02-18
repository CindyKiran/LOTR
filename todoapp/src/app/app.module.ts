import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {TodoListComponent} from './todo-list/todo-list.component';
import { RegisterComponent } from './register/register.component';
import { BlackboardComponent } from './blackboard/blackboard.component';
import {Login} from './login/login.component';
import { LoginDocentComponent } from './login-docent/login-docent.component';
import { DocentRegisterComponent } from './docent-register/docent-register.component';
import { OpleidingVakkenComponent } from './opleiding-vakken/opleiding-vakken.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    Login,
    RegisterComponent,
    BlackboardComponent,
    LoginDocentComponent,
    DocentRegisterComponent,
    OpleidingVakkenComponent,
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

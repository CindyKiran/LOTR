import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlackboardComponent } from './blackboard/blackboard.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: TodoFormComponent},
  {path: 'blackboard', component: BlackboardComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

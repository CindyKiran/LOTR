import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlackboardComponent } from './blackboard/blackboard.component';
import { RegisterComponent } from './register/register.component';
import {Login} from './login/login.component';
import { LoginDocentComponent } from './login-docent/login-docent.component';
import { DocentRegisterComponent } from './docent-register/docent-register.component';
import { OpleidingVakkenComponent } from './opleiding-vakken/opleiding-vakken.component';
import { VakInschrijvingComponent } from './vak-inschrijving/vak-inschrijving.component';
import { HomeworkComponent } from './homework/homework.component';
import {ContactComponent} from './contact/contact.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {PersonalInfoComponent} from './personal-info/personal-info.component';

const routes: Routes = [
  {path: '', component: Login},
  {path: 'blackboard', component: BlackboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login-docent', component: LoginDocentComponent},
  {path: 'register-docent', component: DocentRegisterComponent},
  {path: 'register-opleiding-vak', component: OpleidingVakkenComponent},
  {path: 'vakInschrijving', component: VakInschrijvingComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'homework', component: HomeworkComponent},
  {path: 'personal-info', component: PersonalInfoComponent},
  {path: 'schedule', component: ScheduleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

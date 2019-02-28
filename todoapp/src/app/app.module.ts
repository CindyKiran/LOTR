import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { BlackboardComponent } from './blackboard/blackboard.component';
import {Login} from './login/login.component';
import { LoginDocentComponent } from './login-docent/login-docent.component';
import { DocentRegisterComponent } from './docent-register/docent-register.component';
import { OpleidingVakkenComponent } from './opleiding-vakken/opleiding-vakken.component';
import { VakInschrijvingComponent } from './vak-inschrijving/vak-inschrijving.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeworkComponent } from './homework/homework.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { TeachersComponent } from './teachers/teachers.component';

@NgModule({
  declarations: [
    AppComponent,
    Login,
    RegisterComponent,
    BlackboardComponent,
    LoginDocentComponent,
    DocentRegisterComponent,
    OpleidingVakkenComponent,
    VakInschrijvingComponent,
    ScheduleComponent,
    HomeworkComponent,
    ProfileComponent,
    PersonalinfoComponent,
    ContactComponent,
    NavComponent,
    TeachersComponent,
    FileSelectDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

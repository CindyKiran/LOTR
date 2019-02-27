import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { BlackboardComponent } from './blackboard/blackboard.component';
import {Login} from './login/login.component';
import { LoginDocentComponent } from './login-docent/login-docent.component';
import { DocentRegisterComponent } from './docent-register/docent-register.component';
import { OpleidingVakkenComponent } from './opleiding-vakken/opleiding-vakken.component';
import { VakInschrijvingComponent } from './vak-inschrijving/vak-inschrijving.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeworkComponent } from './homework/homework.component';
<<<<<<< HEAD
import { ProfileComponent } from './profile/profile.component';
=======
import { StudypointsComponent } from './studypoints/studypoints.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';

>>>>>>> d42085d40de4de0da7a2c030a6bd54e9e40a8a39

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
<<<<<<< HEAD
    ProfileComponent,
=======
    StudypointsComponent,
    PersonalinfoComponent,
    ContactComponent,
    NavComponent
>>>>>>> d42085d40de4de0da7a2c030a6bd54e9e40a8a39
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

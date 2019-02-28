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
import { HomeworkComponent } from './homework/homework.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CreditsComponent } from './credits/credits.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import {FileSelectDirective} from 'ng2-file-upload';

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
    HomeworkComponent,
    ScheduleComponent,
    CreditsComponent,
    PersonalInfoComponent,
    ContactComponent,
    NavComponent,
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

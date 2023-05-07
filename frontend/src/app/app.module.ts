import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http'
import { MainpageComponent } from './mainpage/mainpage.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { RegistrationComponent } from './registration/registration.component';
import { CarinfoComponent } from './carinfo/carinfo.component';
import { AddcarComponent } from './addcar/addcar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainpageComponent,
    UserinfoComponent,
    RegistrationComponent,
    CarinfoComponent,
    AddcarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { CarinfoComponent } from './carinfo/carinfo.component';
import { AuthGuard } from 'auth-guard';
import { AddcarComponent } from './addcar/addcar.component';



const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'mainpage', component: MainpageComponent},
  {path: 'userinfo/:id', component: UserinfoComponent},
  {path: 'carinfo/:id', component: CarinfoComponent},
  {path: 'addcar', component: AddcarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

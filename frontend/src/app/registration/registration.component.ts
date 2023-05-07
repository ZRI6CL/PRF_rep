import { Component } from '@angular/core';
import { LoginService } from '../utils/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  user: any = {
    username: null,
    password: null,
    birthdate: null
  };

  uzenet = '';

  constructor(private router: Router, private loginsevice: LoginService) {
  }

  back() {
    this.router.navigate([''])
  }

  registration() {
    if (this.user.username != null && this.user.password != null && this.user.birthdate != null ) {
      this.loginsevice.addUser(this.user.username, this.user.password, this.user.birthdate, ).subscribe(
        res =>(''),
        (err: any) => {
          this.uzenet= err.error
        },
        () => {
          this.uzenet= 'Sikeres regisztráció',
          this.user= [];
        });
    } else {
      this.uzenet= 'Minden mező kitöltése kötelező!'
    }
  }

}

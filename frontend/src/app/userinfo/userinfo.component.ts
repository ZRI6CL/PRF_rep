import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../utils/login.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {


  constructor(private router: Router, private loginservice : LoginService, private route: ActivatedRoute,){

}

access = '1';

user: any = {
  username: null,
  password: null,
  birthdate: null
};

uzenet = '';

getActualUser(element: any) {
  this.loginservice.getUser(element).subscribe((data: any) => {
    console.log('Itt' + data);
    this.user = data;
    this.user.password = null;
  });
}

getUserData() {
  this.loginservice.getUserData().subscribe((data: any) => {

    this.access= data.accessLevel;
  });
}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.getActualUser(params.get('id'));
    }, error => {
    })
    this.getUserData();
  }

  back() {
    this.router.navigate(['mainpage'])
}

edit() {
  if (this.user.username != null && this.user.password != null && this.user.birthdate != null) {
    this.loginservice.updateUser(this.user.username, this.user.password, this.user.birthdate).subscribe(
      res =>(''),
      (err: any) => {
        this.uzenet= err.error
      },
      () => {
        this.uzenet= 'Sikeres a módosítás!';
      });
  }else{
    this.uzenet = 'Minden mező kitöltése kötelező! '
  }
}

del() {
  this.loginservice.deleteUser(this.user.username).subscribe(
    res =>(''),
    (err: any) => {
      this.uzenet= err.error
    },
    () => {
      this.uzenet= 'Sikeres felhasználó törlés!';
      setTimeout(() => { this.back(); }, 1000);
    });
}

}

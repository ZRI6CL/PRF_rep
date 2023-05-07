import { Component, OnInit } from '@angular/core';
import { User } from '../models/users.model';
import { LoginService } from '../utils/login.service';
import { Router } from '@angular/router';
import { Car } from '../models/cars.model';
import { CarService } from '../utils/car.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  users?: User[];
  cars?: Car[];

  constructor(private router: Router, private loginservice : LoginService, private carservice: CarService){
    this.userList();
    this.carList();

  };

  userList(){

    this.loginservice.getUsers().subscribe((user: any) => {
      this.users = user;
      console.log("Felhasználók: " + user);
  });
}

details(name: string) {
  this.router.navigate(['/userinfo/', name])
}


carList(){

  this.carservice.getCars().subscribe((car: any) => {
    this.cars = car;
});
}

cardetails(brand: string) {
  this.router.navigate(['/carinfo/', brand])
}


addCar() {
  this.router.navigate(['/addcar'])
}

  ngOnInit(): void {

  }

}



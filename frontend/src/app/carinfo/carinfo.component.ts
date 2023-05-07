import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../utils/login.service';
import { CarService } from '../utils/car.service';

@Component({
  selector: 'app-carinfo',
  templateUrl: './carinfo.component.html',
  styleUrls: ['./carinfo.component.css']
})
export class CarinfoComponent implements OnInit {

  access = '1';

  car: any = {
    brand: null,
    type: null,
    colour: null,
    fuel: null
  };
  
  uzenet = '';
  constructor(private router: Router, private carservice : CarService, private route: ActivatedRoute, private loginservice: LoginService){

}



getActualCar(element: any) {
  this.carservice.getCar(element).subscribe((data: any) => {
    console.log("data: " + data.type);
    console.log("data: " + element);
    this.car = data;
  });
}

getUserData() {
  this.loginservice.getUserData().subscribe((data: any) => {

    this.access= data.accessLevel;
  });
}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.getActualCar(params.get('id'));
    }, error => {
    })
    this.getUserData();
  }

  back() {
    this.router.navigate(['mainpage'])
}

edit() {
  if (this.car.brand != null && this.car.type != null && this.car.colour != null && this.car.fuel != null) {
    this.carservice.updateCar(this.car.brand, this.car.type, this.car.colour, this.car.fuel).subscribe(
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
  this.carservice.deleteCar(this.car.brand).subscribe(
    res =>(''),
    (err: any) => {
      this.uzenet= err.error
    },
    () => {
      this.uzenet= 'Sikeres autó törlés!';
      setTimeout(() => { this.back(); }, 1000);
    });
}

}

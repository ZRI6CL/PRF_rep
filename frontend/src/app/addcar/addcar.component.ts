import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../utils/car.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent {
  car: any = {
    brand: null,
    type: null,
    colour: null,
    fuel: null
  };

  uzenet = '';

  constructor(private router: Router, private carsevice: CarService) {
  }

  back() {
    this.router.navigate(['/mainpage'])
  }

  addCar() {
    if (this.car.brand != null && this.car.type != null && this.car.colour != null &&this.car.fuel != null ) {
      this.carsevice.addCar(this.car.brand, this.car.type, this.car.colour, this.car.fuel).subscribe(
        res =>(''),
        (err: any) => {
          this.uzenet= err.error
        },
        () => {
          this.uzenet= 'Sikeres autó hozzáadás',
          this.car= [];
        });
    } else {
      this.uzenet= 'Minden mező kitöltése kötelező!'
    }
  }

}

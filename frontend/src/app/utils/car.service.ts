import { Injectable } from '@angular/core';
import { enviroment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }



//###
  getCars() {
    return this.http.get(enviroment.serverUrl + 'cars/');
  }

  getCar(id: string) {
    console.log('carId: ' + id);
    return this.http.get(enviroment.serverUrl + 'cars/'+  id );
  }

  getCarData() {
    return this.http.get(enviroment.serverUrl + 'cars/status' );
  }

  updateCar(brand: string, type: string,colour: String, fuel: String) {
    return this.http.patch(enviroment.serverUrl + 'cars/' + brand, {brand: brand, type: type, colour: colour, fuel: fuel},{responseType: 'text'});
  }

  deleteCar(id: string) {
    return this.http.delete(enviroment.serverUrl + 'cars/' +  id);
  }

  addCar(brand: string, type: string,colour: String, fuel: String) {
    const headers = new HttpHeaders();
    headers.set('Accept', '/');
    return this.http.post(enviroment.serverUrl + 'cars/', {brand: brand, type: type, colour: colour, fuel: fuel}, {headers:headers, responseType: 'text'});
  }
  

}

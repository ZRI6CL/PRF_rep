import { Injectable } from '@angular/core';
import { enviroment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(enviroment.serverUrl + 'users/login', {username: username, password: password}, {responseType: 'text'});
  }

  logout() {
    return this.http.post(enviroment.serverUrl + 'users/logout', {}, {withCredentials: true, responseType: 'text'});
  }

//###
  getUsers() {
    return this.http.get(enviroment.serverUrl + 'users/');
  }

  getUser(id: string) {
    console.log("id kiiratas " + id);
    return this.http.get(enviroment.serverUrl + 'users/'+  id );
  }

  getUserData() {
    return this.http.get(enviroment.serverUrl + 'users/status' );
  }

  updateUser(username: string, password: string, birthdate: Date) {
    return this.http.patch(enviroment.serverUrl + 'users/' + username, {username: username, password: password, birthdate: birthdate},{responseType: 'text'});
  }

  deleteUser(id: string) {
    return this.http.delete(enviroment.serverUrl + 'users/' +  id);
  }

  addUser(username: string, password: string, birthdate: Date) {
    const headers = new HttpHeaders();
    headers.set('Accept', '/');
    return this.http.post(enviroment.serverUrl + 'users/', {username: username, password: password, birthdate: birthdate}, {headers:headers, responseType: 'text'});
  }
  

}

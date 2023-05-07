import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ConnectionService {

  constructor(private http: HttpClient) { }

  greet() {
    return this.http.get(enviroment.serverUrl, {responseType: 'text', withCredentials: true})
  }


  getUser(id: string) {
    return this.http.get(enviroment.serverUrl + 'users/'+  id );
  }
}

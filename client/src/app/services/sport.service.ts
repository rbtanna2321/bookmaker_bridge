import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})

export class SportService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000';

  post(data) {
    return this.http.post(this.baseUrl + '/sports/sport/add', data)
  }

  get() {
    return this.http.get(this.baseUrl + '/sports/sport')
  }
}


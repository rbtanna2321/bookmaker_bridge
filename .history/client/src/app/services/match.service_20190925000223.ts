import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000';

  post(data) {
    return this.http.post(this.baseUrl + '/matches/match/add', data);
  }

  get() {
    return this.http.get(this.baseUrl + '/matches/match');
  }
}

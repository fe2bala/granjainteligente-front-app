import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaiaService {

  baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }
  getBaias(){
    return this.http.get(this.baseUrl+"/api/baias")
  }
}

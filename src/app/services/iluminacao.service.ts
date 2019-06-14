import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IluminacaoService {
  
  putIluminacao(id: number,params) {
    return this.http.put(environment.baseUrl+"/api/luminosidade/"+id,params)
  }

  constructor(private http: HttpClient) { }
}

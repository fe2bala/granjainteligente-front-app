import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaiaService {
  baseUrl = environment.baseUrl

  getBaia(id: number) {
    return this.http.get(this.baseUrl + "/api/baias/" + id);
  }
  constructor(private http: HttpClient) { }
  getBaias() {
    return this.http.get(this.baseUrl + "/api/baias")
  }
  putBaia(id: number, baia) {
    return this.http.put(this.baseUrl + "/api/baias/" + id, baia)
  }
<<<<<<< HEAD
  postBaia(baia){
    return this.http.post(this.baseUrl +"/api/baias",baia)
=======
  postBaia(baia) {
    return this.http.post(this.baseUrl + "/api/baias/", baia)
>>>>>>> 1d8ccf0a43d7d5bb582318961630a892bac44620
  }
}

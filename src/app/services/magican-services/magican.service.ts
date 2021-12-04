import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseFull } from '../../models/RespuestaModel';
import { Observable } from 'rxjs';
import { GeneralInterface } from '../../models/General.model';

@Injectable({
  providedIn: 'root'
})
export class MagicanService {

  API_URI = this.generalInterface.urlApi;

  constructor(private http: HttpClient, private generalInterface: GeneralInterface) {

  }

  getHouses() {

    return this.http.get<ResponseFull>(`${this.API_URI}/characters`);
  }

  getNumberOfMembersHouse(house) {

    return this.http.get<ResponseFull>(`${this.API_URI}/characters/house/${house}`);
  }



}

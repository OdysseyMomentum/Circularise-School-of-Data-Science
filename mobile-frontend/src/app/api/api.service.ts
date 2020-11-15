import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient, ) { }


  public mint(creator: string, social: number, env: number, impact:number, 
  			  booster:number, waste_points:number) {
    const authData = { 
    	creator: creator, 
    	social: social, 
    	environment: env,
    	impact: impact,
    	booster: booster,
    	waste_points: waste_points, };
    return this.http
      .post(environment.apiUrl + "/mint", authData)
  }
}

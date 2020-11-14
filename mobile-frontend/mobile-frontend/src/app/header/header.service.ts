import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  // private headerState: boolean = true;
  // private headerStateListener = new Subject<boolean>();

  private headerBack: boolean = true;
  private headerBackListener = new Subject<boolean>();
 
  constructor() { }

  // public getHeaderStateListerner(){
  //   return this.headerStateListener.asObservable();
  // }

  // public getHeaderState(){
  //   return this.headerState;
  // }

  // public setHeaderState(state: boolean){
  //   this.headerState = state;
  //   this.headerStateListener.next(state);
  // }


  public getHeaderBackListerner(){
    return this.headerBackListener.asObservable();
  }

  public setHeaderBack(route: string){
    this.headerBack = route;
    this.headerBackListener.next(route);
  }
}

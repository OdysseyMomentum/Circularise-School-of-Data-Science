import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { HeaderService } from "../header/header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // private headerBackListener: Subscription<string>;
  public back: string = "/";

  constructor(
  	private headerBackListener: Subscription,
    private headerService: HeaderService) { }

  ngOnInit(): void {

  	this.headerBackListener = this.headerService
      .getHeaderBackListerner()
      .subscribe((path: string)=>{
        this.back = path;
      });

  }


  // ngOnDestroy(){
  //   this.authListenerSubs.unsubscribe();
  // }

}

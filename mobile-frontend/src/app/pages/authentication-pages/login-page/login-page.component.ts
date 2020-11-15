import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { HeaderService } from "../../../header/header.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
  	private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setHeaderBack("/");
  }

}

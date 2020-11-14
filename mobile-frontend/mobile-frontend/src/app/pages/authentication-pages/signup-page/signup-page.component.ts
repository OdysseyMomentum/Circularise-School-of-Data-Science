import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators} from '@angular/forms';
import { HeaderService } from "../../../header/header.service";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(
  	private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setHeaderBack("/");
  }
}

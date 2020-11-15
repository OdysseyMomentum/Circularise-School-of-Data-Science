import { Component, OnInit } from '@angular/core';
import { HeaderService } from "../../header/header.service";

@Component({
  selector: 'app-past-events-page',
  templateUrl: './past-events-page.component.html',
  styleUrls: ['./past-events-page.component.css']
})
export class PastEventsPageComponent implements OnInit {
	public date = new Date();
	public events: any[] = [];



  constructor(
  	private headerService: HeaderService) { }


  ngOnInit(): void {
    this.headerService.setHeaderBack("/home");
  	let date1 = new Date()
  	date1.setDate(new Date().getDate()-1);
  	let date2 = new Date()
  	date2.setDate(new Date().getDate()-2);
  	let date3 = new Date()
  	date3.setDate(new Date().getDate()-4);
  	let date4 = new Date()
  	date4.setDate(new Date().getDate()-5);
  	let date5 = new Date()
  	date5.setDate(new Date().getDate()-6);
  	this.events = [{
		"name": "",
		"location": "Davao City",
		"date": new Date(date1).toISOString().slice(0,10),
		"points": 47,
		"image": "/assets/images/placeholder_waste/waste1.jpg",
	},{
		"name": "",
		"location": "Davao City",
		"date": new Date(date2).toISOString().slice(0,10),
		"points": 47,
		"image": "/assets/images/placeholder_waste/waste2.jpg",
	},{
		"name": "",
		"location": "Davao City",
		"date": new Date(date3).toISOString().slice(0,10),
		"points": 48,
		"image": "/assets/images/placeholder_waste/waste3.png",
	},{
		"name": "",
		"location": "Davao City",
		"date": new Date(date4).toISOString().slice(0,10),
		"points": 46,
		"image": "/assets/images/placeholder_waste/waste4.jpg",
	},{
		"name": "",
		"location": "Davao City",
		"date": new Date(date5).toISOString().slice(0,10),
		"points": 46,
		"image": "/assets/images/placeholder_waste/waste5.jpeg",
	}]
  }

}

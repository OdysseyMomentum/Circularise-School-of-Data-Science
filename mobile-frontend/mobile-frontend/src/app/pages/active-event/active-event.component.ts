import { Component, OnInit } from '@angular/core';
import { HeaderService } from "../../header/header.service";

@Component({
  selector: 'app-active-event',
  templateUrl: './active-event.component.html',
  styleUrls: ['./active-event.component.css']
})
export class ActiveEventComponent implements OnInit {

	public people = [{
		name: "Alice",
		image: "/assets/images/placeholder_people/person2.jpg",
	},{
		name: "Bob",
		image: "/assets/images/placeholder_people/person11.jpg",
	},{
		name: "Charlie",
		image: "/assets/images/placeholder_people/person12.jpg",
	},{
		name: "Dave",
		image: "/assets/images/placeholder_people/person9.jpg",
	},{
		name: "Eve",
		image: "/assets/images/placeholder_people/person5.jpg",
	},{
		name: "Frank",
		image: "/assets/images/placeholder_people/person6.jpg",
	}];

	public active_scores = [{
		"name": "Audit collected amount",
		"points": 2,
	},{
		"name": "Take picture before",
		"points": 0.5,
	},{
		"name": "Take picture after",
		"points": 0.5,
	},{
		"name": "Picture of surveys",
		"points": 2,
	},{
		"name": "Call verification",
		"points": 3,
	}]

	public event: any = {
		"name": "Get Wasted Party hardy",
		"location": "Davao City",
		"date": new Date().toISOString().slice(0,10),
		"base-score": 42
	}

  constructor(
  	private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setHeaderBack("/home");
  }

}

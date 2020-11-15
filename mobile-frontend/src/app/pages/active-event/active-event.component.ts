import { Component, OnInit } from '@angular/core';
import { HeaderService } from "../../header/header.service";
import {FormControl, Validators} from '@angular/forms';

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
	},
	// {
	// 	name: "Charlie",
	// 	image: "/assets/images/placeholder_people/person12.jpg",
	// },{
	// 	name: "Dave",
	// 	image: "/assets/images/placeholder_people/person9.jpg",
	// },
	{
		name: "Eve",
		image: "/assets/images/placeholder_people/person5.jpg",
	},{
		name: "Frank",
		image: "/assets/images/placeholder_people/person6.jpg",
	}];

	public active_scores = [{
		"name": "Audit collected amount",
		"points": 2,
		"done": false
	},{
		"name": "Take picture people before",
		"points": 0.5,
		"done": false
	},{
		"name": "Take picture people after",
		"points": 0.5,
		"done": false
	},{
		"name": "Take picture of waste",
		"points": 4,
		"done": false
	},{
		"name": "Picture of surveys",
		"points": 2,
		"done": false
	},{
		"name": "Call verification",
		"points": 3,
		"done": false
	}]

	public event: any = {
		"name": "Waste party",
		"location": "Davao City",
		"date": new Date().toISOString().slice(0,10),
		"base-score": 42
	}
	public total_score = 0;

  constructor(
  	private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setHeaderBack("/home");
    this.calculate_total_score();
  }

  public calculate_total_score(){
    this.total_score = this.event["base-score"]+this.active_scores
		.filter(a => a.done)
		.map(a => a.points)
		.reduce((a, b) => a + b, 0);
  }

}

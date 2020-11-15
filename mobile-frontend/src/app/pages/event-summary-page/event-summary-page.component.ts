import { Component, OnInit } from '@angular/core';
import { HeaderService } from "../../header/header.service";

@Component({
  selector: 'app-event-summary-page',
  templateUrl: './event-summary-page.component.html',
  styleUrls: ['./event-summary-page.component.css']
})
export class EventSummaryPageComponent implements OnInit {

	public total_score = 0;

	public event: any = {
		"name": "Get Wasted Party hardy",
		"location": "Davao City",
		"date": new Date().toISOString().slice(0,10),
		"base-score": 42,
		"image": "/assets/images/placeholder_waste/waste2.jpg",
		"people": [{
				name: "Bob",
				image: "/assets/images/placeholder_people/person11.jpg",
			},{
				name: "Dave",
				image: "/assets/images/placeholder_people/person9.jpg",
			},
			{
				name: "Eve",
				image: "/assets/images/placeholder_people/person5.jpg",
			},{
				name: "Frank",
				image: "/assets/images/placeholder_people/person6.jpg",
		}],
		"active_scores" : [{
			"name": "Audit collected amount",
			"points": 2,
			"done": false
		},{
			"name": "Take picture people before",
			"points": 0.5,
			"done": true
		},{
			"name": "Take picture people after",
			"points": 0.5,
			"done": true
		},{
			"name": "Take picture of waste",
			"points": 4,
			"done": true
		},{
			"name": "Picture of surveys",
			"points": 2,
			"done": false
		},{
			"name": "Call verification",
			"points": 3,
			"done": true
		}]
	}



	public environment_items = [
		{
			"name": "Degredation",
			"points": 6,
			"max_points": 7,
		},
		{
			"name": "Pollutants",
			"points": 8,
			"max_points": 11,
		},
	];
	public environment_items_total = this.environment_items
		.map(a => a.points)
		.reduce((a, b) => a + b, 0);
	public environment_items_max_total = this.environment_items
		.map(a => a.max_points)
		.reduce((a, b) => a + b, 0);

	public impact_items = [
		{
			"name": "Hotspots",
			"points": 3,
			"max_points": 5,
		},
		{
			"name": "Leakage prevention",
			"points": 5,
			"max_points": 14,
		},
		{
			"name": "Ocean",
			"points": 0,
			"max_points": 3,
		},
	];
	public impact_items_total = this.impact_items
		.map(a => a.points)
		.reduce((a, b) => a + b, 0);
	public impact_items_max_total = this.impact_items
		.map(a => a.max_points)
		.reduce((a, b) => a + b, 0);

	public social_items = [
		{
			"name": "Child labor",
			"points": 3,
			"max_points": 10,
		},
		{
			"name": "Education pogrammes",
			"points": 5,
			"max_points": 7,
		},
		{
			"name": "Insurance rogrammes",
			"points": 7,
			"max_points": 8,
		},
		{
			"name": "Fair pay",
			"points": 9,
			"max_points": 14,
		},
		{
			"name": "Working conditions",
			"points": 6,
			"max_points": 16,
		},
	];
	public social_items_total = this.social_items
		.map(a => a.points)
		.reduce((a, b) => a + b, 0);
	public social_items_max_total = this.social_items
		.map(a => a.max_points)
		.reduce((a, b) => a + b, 0);


	public total = [
		this.social_items_total, 
		this.environment_items_total,
		this.impact_items_total].reduce((a, b) => a + b, 0);

	public max_total = [
		this.social_items_max_total, 
		this.environment_items_max_total,
		this.impact_items_max_total].reduce((a, b) => a + b, 0);

  constructor(
  	private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setHeaderBack("/past_events");
    this.calculate_total_score();
  }


	public calculate_total_score(){
		this.total_score = this.event["base-score"]+this.event.active_scores
			.filter((a: any) => a.done)
			.map((a: any) => a.points)
			.reduce((a: any, b: any) => a + b, 0);
	}

}

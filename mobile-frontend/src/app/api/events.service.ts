import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public event = {
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

  constructor() { }
}

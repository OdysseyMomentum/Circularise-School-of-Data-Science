import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores-page',
  templateUrl: './scores-page.component.html',
  styleUrls: ['./scores-page.component.css']
})
export class ScoresPageComponent implements OnInit {

	public environment_items = [
		{
			"name": "Degredation",
			"points": 6,
		},
		{
			"name": "Pollutants",
			"points": 8,
		},
	];
	public environment_items_total = this.environment_items
		.map(a => a.points)
		.reduce((a, b) => a + b, 0);

	public impact_items = [
		{
			"name": "Hotspots",
			"points": 3,
		},
		{
			"name": "Leakage prevention",
			"points": 5,
		},
		{
			"name": "Ocean",
			"points": 0,
		},
	];
	public impact_items_total = this.impact_items
		.map(a => a.points)
		.reduce((a, b) => a + b, 0);

	public social_items = [
		{
			"name": "Child labor",
			"points": 3,
		},
		{
			"name": "Education pogrammes",
			"points": 5,
		},
		{
			"name": "Insurance rogrammes",
			"points": 7,
		},
		{
			"name": "Fair pay",
			"points": 9,
		},
		{
			"name": "Working conditions",
			"points": 6,
		},
	];
	public social_items_total = this.social_items
		.map(a => a.points)
		.reduce((a, b) => a + b, 0);

  constructor() { }

  ngOnInit(): void {
  }

}

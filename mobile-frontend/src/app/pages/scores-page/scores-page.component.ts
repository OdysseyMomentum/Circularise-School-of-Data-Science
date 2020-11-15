import { Component, OnInit } from '@angular/core';
import { HeaderService } from "../../header/header.service";

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
    this.headerService.setHeaderBack("/home");
  }

}

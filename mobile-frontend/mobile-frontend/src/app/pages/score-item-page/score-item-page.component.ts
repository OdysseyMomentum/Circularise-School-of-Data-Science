import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-item-page',
  templateUrl: './score-item-page.component.html',
  styleUrls: ['./score-item-page.component.css']
})
export class ScoreItemPageComponent implements OnInit {

	public title: string = "Child labor";

	public current_items = [{
		"name": "Confirmation during gathering",
		"points": 3
	}];
	
	public current_items_total = this.current_items
		.map(a => a.points)
		.reduce((a, b) => a + b, 0);

	public additional_items = [{
		"name": "Photo capturing before gathering",
		"points": 0.5,
	},{
		"name": "Photo capturing after gathering",
		"points": 0.5,
	},{
		"name": "Check by NGO",
		"points": 3
	},{
		"name": "Automatic calls",
		"points": 1
	},{
		"name": "Survey",
		"points": 2
	}];
	public additional_items_total = this.additional_items
		.map(a => a.points)
		.reduce((a, b) => a + b, 0);

  constructor() { }

  ngOnInit(): void {
  }

}

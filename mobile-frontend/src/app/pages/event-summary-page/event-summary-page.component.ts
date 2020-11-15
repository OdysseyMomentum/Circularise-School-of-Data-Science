import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-summary-page',
  templateUrl: './event-summary-page.component.html',
  styleUrls: ['./event-summary-page.component.css']
})
export class EventSummaryPageComponent implements OnInit {

	public event: any = {
		"name": "Get Wasted Party hardy",
		"location": "Davao City",
		"date": new Date().toISOString().slice(0,10),
		"base-score": 42,
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
		}]
	}

	
  constructor() { }

  ngOnInit(): void {
  }

}

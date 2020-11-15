import { Component, OnInit } from '@angular/core';
import { HeaderService } from "../../header/header.service";

@Component({
  selector: 'app-sell-page',
  templateUrl: './sell-page.component.html',
  styleUrls: ['./sell-page.component.css']
})
export class SellPageComponent implements OnInit {



	public event: any = {
		"name": "Get Wasted Party hardy",
		"location": "Davao City",
		"date": new Date().toISOString().slice(0,10),
		"base-score": 42,
		"image": "/assets/images/placeholder_waste/waste2.jpg",
		"goods" : [{
			"name": "PET Bottles",
			"weight": "25kg",
		},{
			"name": "Paper",
			"weight": "10kg",
		},{
			"name": "Aluminium cans",
			"weight": "5kg",
		},{
			"name": "Mixed waste",
			"weight": "5kg",
		}]
	}

  constructor(
  	private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setHeaderBack("/event_summary");
  }

}

import { Component, OnInit } from '@angular/core';
import { HeaderService } from "../../header/header.service";

@Component({
  selector: 'app-score-sub-item-page',
  templateUrl: './score-sub-item-page.component.html',
  styleUrls: ['./score-sub-item-page.component.css']
})
export class ScoreSubItemPageComponent implements OnInit {


	public sub_item = {
		"name": "Checked by NGO",
		"text": "Request a check by a NGO to verify your practices. This organisation can give you points for multiple aspects if you mean the criteria",
		"effects": [{
			"name": "Child labor",
			"points": 3,
			// "max_points": 7,
		},{
			"name": "Transparency",
			"points": 4
		},{
			"name": "Working conditions",
			"points": 3
		},{
			"name": "Fair pay",
			"points": 3
		},{
			"name": "Insurance",
			"points": 2
		}]
	}

  constructor(
  	private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setHeaderBack("/score_item/child_labor");
  }


}

import { Component, OnInit } from '@angular/core';
import { HeaderService } from "../../header/header.service";
import { EventsService } from "../../api/events.service";

@Component({
  selector: 'app-scores-page',
  templateUrl: './scores-page.component.html',
  styleUrls: ['./scores-page.component.css']
})
export class ScoresPageComponent implements OnInit {


	public environment_items: any[] = [];
	public environment_items_total = 0;
	public environment_items_max_total = 0;

	public impact_items: any[] = [];
	public impact_items_total = 0;
	public impact_items_max_total = 0;

	public social_items: any[] = [];
	public social_items_total = 0;
	public social_items_max_total = 0;

	public total = 0;

	public max_total = 0;


  constructor(
  	private headerService: HeaderService,
  	private eventsService: EventsService) { }

  ngOnInit(): void {
    this.headerService.setHeaderBack("/home");

    // this.event = this.eventsService.event;
    this.environment_items = this.eventsService.environment_items;
    this.impact_items = this.eventsService.impact_items;
    this.social_items = this.eventsService.social_items;
    this.calculate_total_score();
  }

	public calculate_total_score(){

		this.environment_items_total = this.environment_items
			.map(a => a.points)
			.reduce((a, b) => a + b, 0);
		this.environment_items_max_total = this.environment_items
			.map(a => a.max_points)
			.reduce((a, b) => a + b, 0);

		this.impact_items_total = this.impact_items
			.map(a => a.points)
			.reduce((a, b) => a + b, 0);
		this.impact_items_max_total = this.impact_items
			.map(a => a.max_points)
			.reduce((a, b) => a + b, 0);

		this.social_items_total = this.social_items
			.map(a => a.points)
			.reduce((a, b) => a + b, 0);
		this.social_items_max_total = this.social_items
			.map(a => a.max_points)
			.reduce((a, b) => a + b, 0);

		this.total = [
			this.social_items_total, 
			this.environment_items_total,
			this.impact_items_total].reduce((a, b) => a + b, 0);

		this.max_total = [
			this.social_items_max_total, 
			this.environment_items_max_total,
			this.impact_items_max_total].reduce((a, b) => a + b, 0);
	}

}

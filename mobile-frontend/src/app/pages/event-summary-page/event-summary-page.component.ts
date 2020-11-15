import { Component, OnInit } from '@angular/core';
import { HeaderService } from "../../header/header.service";
import { EventsService } from "../../api/events.service";

@Component({
  selector: 'app-event-summary-page',
  templateUrl: './event-summary-page.component.html',
  styleUrls: ['./event-summary-page.component.css']
})
export class EventSummaryPageComponent implements OnInit {

	public total_score = 0;

	public event: any;

	public environment_items: any[] = [];
	public environment_items_total = 0;
	public environment_items_max_total = 0;

	public impact_items: any[] = [];
	public impact_items_total = 0;
	public impact_items_max_total = 0;

	public social_items: any[] = [];
	public social_items_total = 0;
	public social_items_max_total = 0;


	public total = [
		this.social_items_total, 
		this.environment_items_total,
		this.impact_items_total].reduce((a, b) => a + b, 0);

	public max_total = [
		this.social_items_max_total, 
		this.environment_items_max_total,
		this.impact_items_max_total].reduce((a, b) => a + b, 0);

  constructor(
  	private headerService: HeaderService,
  	private eventsService: EventsService) { }

  ngOnInit(): void {
    this.headerService.setHeaderBack("/past_events");
    // console.log(this.eventsService)

    this.event = this.eventsService.event;
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
			
		this.total_score = this.event["base-score"]+this.event.active_scores
			.filter((a: any) => a.done)
			.map((a: any) => a.points)
			.reduce((a: any, b: any) => a + b, 0);
	}

}

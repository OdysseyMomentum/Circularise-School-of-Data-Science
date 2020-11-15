import { Component, OnInit } from '@angular/core';
import { HeaderService } from "../../header/header.service";
import { EventsService } from "../../api/events.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public people: any[] = [];

	constructor(private eventsService: EventsService) { }

	ngOnInit(): void {
		this.people = this.eventsService.people;
	}

}

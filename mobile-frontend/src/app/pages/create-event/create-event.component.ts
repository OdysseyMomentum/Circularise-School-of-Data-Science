import { Component, OnInit } from '@angular/core';
import { HeaderService } from "../../header/header.service";
import { EventsService } from "../../api/events.service";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

	public people: any[] = [];

  constructor(
  	private headerService: HeaderService,
  	private eventsService: EventsService) { }

  ngOnInit(): void {
    this.headerService.setHeaderBack("/home");
		this.people = this.eventsService.people;
  }
}

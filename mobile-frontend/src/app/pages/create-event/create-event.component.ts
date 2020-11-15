import { Component, OnInit } from '@angular/core';
import { HeaderService } from "../../header/header.service";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

	public people = [{
		name: "Alice",
		image: "/assets/images/placeholder_people/person2.jpg",
	},{
		name: "Bob",
		image: "/assets/images/placeholder_people/person11.jpg",
	},{
		name: "Charlie",
		image: "/assets/images/placeholder_people/person12.jpg",
	},{
		name: "Dave",
		image: "/assets/images/placeholder_people/person9.jpg",
	},{
		name: "Eve",
		image: "/assets/images/placeholder_people/person5.jpg",
	},{
		name: "Frank",
		image: "/assets/images/placeholder_people/person6.jpg",
	}];

  constructor(
  	private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setHeaderBack("/home");
  }

}

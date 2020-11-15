import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSummaryPageComponent } from './event-summary-page.component';

describe('EventSummaryPageComponent', () => {
  let component: EventSummaryPageComponent;
  let fixture: ComponentFixture<EventSummaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSummaryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

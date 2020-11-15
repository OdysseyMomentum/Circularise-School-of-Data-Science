import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastEventsPageComponent } from './past-events-page.component';

describe('PastEventsPageComponent', () => {
  let component: PastEventsPageComponent;
  let fixture: ComponentFixture<PastEventsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastEventsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

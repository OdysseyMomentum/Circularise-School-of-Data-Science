import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreItemPageComponent } from './score-item-page.component';

describe('ScoreItemPageComponent', () => {
  let component: ScoreItemPageComponent;
  let fixture: ComponentFixture<ScoreItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreItemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

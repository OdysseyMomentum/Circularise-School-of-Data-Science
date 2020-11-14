import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreSubItemPageComponent } from './score-sub-item-page.component';

describe('ScoreSubItemPageComponent', () => {
  let component: ScoreSubItemPageComponent;
  let fixture: ComponentFixture<ScoreSubItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreSubItemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreSubItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

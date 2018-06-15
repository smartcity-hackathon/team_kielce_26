import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemNotificationsComponent } from './problem-notifications.component';

describe('ProblemNotificationsComponent', () => {
  let component: ProblemNotificationsComponent;
  let fixture: ComponentFixture<ProblemNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

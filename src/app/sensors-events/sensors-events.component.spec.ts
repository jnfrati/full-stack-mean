import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorsEventsComponent } from './sensors-events.component';

describe('SensorsEventsComponent', () => {
  let component: SensorsEventsComponent;
  let fixture: ComponentFixture<SensorsEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorsEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

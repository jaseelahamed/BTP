import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventloginComponent } from './eventlogin.component';

describe('EventloginComponent', () => {
  let component: EventloginComponent;
  let fixture: ComponentFixture<EventloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

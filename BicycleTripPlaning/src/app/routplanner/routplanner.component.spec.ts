import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutplannerComponent } from './routplanner.component';

describe('RoutplannerComponent', () => {
  let component: RoutplannerComponent;
  let fixture: ComponentFixture<RoutplannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutplannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutplannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

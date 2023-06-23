import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouroperotarComponent } from './touroperotar.component';

describe('TouroperotarComponent', () => {
  let component: TouroperotarComponent;
  let fixture: ComponentFixture<TouroperotarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouroperotarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouroperotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

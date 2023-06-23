import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclingclubComponent } from './cyclingclub.component';

describe('CyclingclubComponent', () => {
  let component: CyclingclubComponent;
  let fixture: ComponentFixture<CyclingclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyclingclubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyclingclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

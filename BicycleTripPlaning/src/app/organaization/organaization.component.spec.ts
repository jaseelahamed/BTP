import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganaizationComponent } from './organaization.component';

describe('OrganaizationComponent', () => {
  let component: OrganaizationComponent;
  let fixture: ComponentFixture<OrganaizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganaizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganaizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OotyComponent } from './ooty.component';

describe('OotyComponent', () => {
  let component: OotyComponent;
  let fixture: ComponentFixture<OotyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OotyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

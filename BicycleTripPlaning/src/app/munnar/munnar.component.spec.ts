import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunnarComponent } from './munnar.component';

describe('MunnarComponent', () => {
  let component: MunnarComponent;
  let fixture: ComponentFixture<MunnarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunnarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MunnarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

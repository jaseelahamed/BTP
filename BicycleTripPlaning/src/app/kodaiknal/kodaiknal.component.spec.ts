import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KodaiknalComponent } from './kodaiknal.component';

describe('KodaiknalComponent', () => {
  let component: KodaiknalComponent;
  let fixture: ComponentFixture<KodaiknalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KodaiknalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KodaiknalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomimageComponent } from './welcomimage.component';

describe('WelcomimageComponent', () => {
  let component: WelcomimageComponent;
  let fixture: ComponentFixture<WelcomimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

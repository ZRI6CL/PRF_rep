import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarinfoComponent } from './carinfo.component';

describe('CarinfoComponent', () => {
  let component: CarinfoComponent;
  let fixture: ComponentFixture<CarinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarinfoComponent]
    });
    fixture = TestBed.createComponent(CarinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerinfoComponent } from './passengerinfo.component';

describe('PassengerinfoComponent', () => {
  let component: PassengerinfoComponent;
  let fixture: ComponentFixture<PassengerinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

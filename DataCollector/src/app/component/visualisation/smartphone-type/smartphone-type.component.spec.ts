import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneTypeComponent } from './smartphone-type.component';

describe('SmartphoneTypeComponent', () => {
  let component: SmartphoneTypeComponent;
  let fixture: ComponentFixture<SmartphoneTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphoneTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphoneTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

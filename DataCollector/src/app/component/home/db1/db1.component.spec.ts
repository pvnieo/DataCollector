import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Db1Component } from './db1.component';

describe('Db1Component', () => {
  let component: Db1Component;
  let fixture: ComponentFixture<Db1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Db1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Db1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

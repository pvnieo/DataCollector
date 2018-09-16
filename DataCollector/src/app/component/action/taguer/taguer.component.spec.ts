import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaguerComponent } from './taguer.component';

describe('TaguerComponent', () => {
  let component: TaguerComponent;
  let fixture: ComponentFixture<TaguerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaguerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

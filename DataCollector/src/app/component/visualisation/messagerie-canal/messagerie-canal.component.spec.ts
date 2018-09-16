import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerieCanalComponent } from './messagerie-canal.component';

describe('MessagerieCanalComponent', () => {
  let component: MessagerieCanalComponent;
  let fixture: ComponentFixture<MessagerieCanalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagerieCanalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagerieCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

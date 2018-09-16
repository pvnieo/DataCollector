import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionEvolutionComponent } from './connexion-evolution.component';

describe('ConnexionEvolutionComponent', () => {
  let component: ConnexionEvolutionComponent;
  let fixture: ComponentFixture<ConnexionEvolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnexionEvolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

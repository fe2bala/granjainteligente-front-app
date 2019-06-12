import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IluminacaoCardComponent } from './iluminacao-card.component';

describe('IluminacaoCardComponent', () => {
  let component: IluminacaoCardComponent;
  let fixture: ComponentFixture<IluminacaoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IluminacaoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IluminacaoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

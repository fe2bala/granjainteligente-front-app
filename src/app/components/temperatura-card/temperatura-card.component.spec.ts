import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturaCardComponent } from './temperatura-card.component';

describe('TemperaturaCardComponent', () => {
  let component: TemperaturaCardComponent;
  let fixture: ComponentFixture<TemperaturaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperaturaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

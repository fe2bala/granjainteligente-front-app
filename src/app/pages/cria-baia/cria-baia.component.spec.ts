import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaBaiaComponent } from './cria-baia.component';

describe('CriaBaiaComponent', () => {
  let component: CriaBaiaComponent;
  let fixture: ComponentFixture<CriaBaiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriaBaiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaBaiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

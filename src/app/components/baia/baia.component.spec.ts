import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiaComponent } from './baia.component';

describe('BaiaComponent', () => {
  let component: BaiaComponent;
  let fixture: ComponentFixture<BaiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiaDetailsComponent } from './baia-details.component';

describe('BaiaDetailsComponent', () => {
  let component: BaiaDetailsComponent;
  let fixture: ComponentFixture<BaiaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

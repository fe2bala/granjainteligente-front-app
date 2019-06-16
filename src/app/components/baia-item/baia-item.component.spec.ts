import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiaItemComponent } from './baia-item.component';

describe('BaiaItemComponent', () => {
  let component: BaiaItemComponent;
  let fixture: ComponentFixture<BaiaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

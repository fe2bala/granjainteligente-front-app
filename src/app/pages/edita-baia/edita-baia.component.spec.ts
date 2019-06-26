import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaBaiaComponent } from './edita-baia.component';

describe('EditaBaiaComponent', () => {
  let component: EditaBaiaComponent;
  let fixture: ComponentFixture<EditaBaiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaBaiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaBaiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

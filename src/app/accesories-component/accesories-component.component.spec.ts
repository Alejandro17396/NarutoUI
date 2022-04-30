import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriesComponentComponent } from './accesories-component.component';

describe('AccesoriesComponentComponent', () => {
  let component: AccesoriesComponentComponent;
  let fixture: ComponentFixture<AccesoriesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoriesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoriesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

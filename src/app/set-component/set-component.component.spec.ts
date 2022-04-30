import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetComponentComponent } from './set-component.component';

describe('SetComponentComponent', () => {
  let component: SetComponentComponent;
  let fixture: ComponentFixture<SetComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

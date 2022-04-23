import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartagoComponent } from './cartago.component';

describe('CartagoComponent', () => {
  let component: CartagoComponent;
  let fixture: ComponentFixture<CartagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

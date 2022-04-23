import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuanacasteComponent } from './guanacaste.component';

describe('GuanacasteComponent', () => {
  let component: GuanacasteComponent;
  let fixture: ComponentFixture<GuanacasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuanacasteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuanacasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

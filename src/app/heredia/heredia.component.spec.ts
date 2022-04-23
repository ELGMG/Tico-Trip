import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerediaComponent } from './heredia.component';

describe('HerediaComponent', () => {
  let component: HerediaComponent;
  let fixture: ComponentFixture<HerediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

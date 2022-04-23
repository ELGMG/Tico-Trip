import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLugar1Component } from './info-lugar1.component';

describe('InfoLugar1Component', () => {
  let component: InfoLugar1Component;
  let fixture: ComponentFixture<InfoLugar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoLugar1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoLugar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntarenasComponent } from './puntarenas.component';

describe('PuntarenasComponent', () => {
  let component: PuntarenasComponent;
  let fixture: ComponentFixture<PuntarenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntarenasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntarenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

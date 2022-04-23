import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlajuelaComponent } from './alajuela.component';

describe('AlajuelaComponent', () => {
  let component: AlajuelaComponent;
  let fixture: ComponentFixture<AlajuelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlajuelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlajuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

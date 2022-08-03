import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formdemo3Component } from './formdemo3.component';

describe('Formdemo3Component', () => {
  let component: Formdemo3Component;
  let fixture: ComponentFixture<Formdemo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formdemo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formdemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formdemo2Component } from './formdemo2.component';

describe('Formdemo2Component', () => {
  let component: Formdemo2Component;
  let fixture: ComponentFixture<Formdemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formdemo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formdemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

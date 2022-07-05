import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rxjs1Component } from './rxjs1.component';

describe('Rxjs1Component', () => {
  let component: Rxjs1Component;
  let fixture: ComponentFixture<Rxjs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rxjs1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rxjs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

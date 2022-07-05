import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rxjs4Component } from './rxjs4.component';

describe('Rxjs4Component', () => {
  let component: Rxjs4Component;
  let fixture: ComponentFixture<Rxjs4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rxjs4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rxjs4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

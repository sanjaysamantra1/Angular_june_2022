import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rxjs2Component } from './rxjs2.component';

describe('Rxjs2Component', () => {
  let component: Rxjs2Component;
  let fixture: ComponentFixture<Rxjs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rxjs2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rxjs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

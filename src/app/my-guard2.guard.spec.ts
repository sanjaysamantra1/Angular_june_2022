import { TestBed } from '@angular/core/testing';

import { MyGuard2Guard } from './my-guard2.guard';

describe('MyGuard2Guard', () => {
  let guard: MyGuard2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyGuard2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

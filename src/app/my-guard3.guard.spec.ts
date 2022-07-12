import { TestBed } from '@angular/core/testing';

import { MyGuard3Guard } from './my-guard3.guard';

describe('MyGuard3Guard', () => {
  let guard: MyGuard3Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyGuard3Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

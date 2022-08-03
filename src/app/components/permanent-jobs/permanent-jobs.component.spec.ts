import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentJobsComponent } from './permanent-jobs.component';

describe('PermanentJobsComponent', () => {
  let component: PermanentJobsComponent;
  let fixture: ComponentFixture<PermanentJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermanentJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanentJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

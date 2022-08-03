import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractJobsComponent } from './contract-jobs.component';

describe('ContractJobsComponent', () => {
  let component: ContractJobsComponent;
  let fixture: ComponentFixture<ContractJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

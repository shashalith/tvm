import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardhomeComponent } from './dashboardhome.component';

describe('DashboardhomeComponent', () => {
  let component: DashboardhomeComponent;
  let fixture: ComponentFixture<DashboardhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardhomeComponent]
    });
    fixture = TestBed.createComponent(DashboardhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

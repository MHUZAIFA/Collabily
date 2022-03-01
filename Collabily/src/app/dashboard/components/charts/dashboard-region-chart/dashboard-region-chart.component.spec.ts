import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRegionChartComponent } from './dashboard-region-chart.component';

describe('DashboardRegionChartComponent', () => {
  let component: DashboardRegionChartComponent;
  let fixture: ComponentFixture<DashboardRegionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRegionChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRegionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

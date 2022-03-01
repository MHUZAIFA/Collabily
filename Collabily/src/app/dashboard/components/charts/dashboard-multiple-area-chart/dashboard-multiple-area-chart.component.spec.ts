import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMultipleAreaChartComponent } from './dashboard-multiple-area-chart.component';

describe('DashboardMultipleAreaChartComponent', () => {
  let component: DashboardMultipleAreaChartComponent;
  let fixture: ComponentFixture<DashboardMultipleAreaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMultipleAreaChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMultipleAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

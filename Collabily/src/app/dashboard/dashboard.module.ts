import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardWrapperComponent } from './dashboard-wrapper/dashboard-wrapper.component';
import { MaterialModule } from '../material.module';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { LineGraphComponent } from './components/charts/line-graph/line-graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { VerticleBarGraphComponent } from './components/charts/verticle-bar-graph/verticle-bar-graph.component';
import { HorizontalBarGraphComponent } from './components/charts/horizontal-bar-graph/horizontal-bar-graph.component';
import { GaugeChartComponent } from './components/charts/gauge-chart/gauge-chart.component';
import { GroupedVerticleBarGraphComponent } from './components/charts/grouped-verticle-bar-graph/grouped-verticle-bar-graph.component';
import { DashboardAreaChartComponent } from './components/charts/dashboard-area-chart/dashboard-area-chart.component';
import { DashboardMultipleAreaChartComponent } from './components/charts/dashboard-multiple-area-chart/dashboard-multiple-area-chart.component';
import { DashboardRegionChartComponent } from './components/charts/dashboard-region-chart/dashboard-region-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    DashboardWrapperComponent,
    PieChartComponent,
    LineGraphComponent,
    VerticleBarGraphComponent,
    HorizontalBarGraphComponent,
    GaugeChartComponent,
    GroupedVerticleBarGraphComponent,
    DashboardAreaChartComponent,
    DashboardMultipleAreaChartComponent,
    DashboardRegionChartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxChartsModule,
    HighchartsChartModule
  ]
})
export class DashboardModule { }

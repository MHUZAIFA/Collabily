import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreWrapperComponent } from './explore-wrapper/explore-wrapper.component';
import { MaterialModule } from '../material.module';
import { InfluencerCardComponent } from './explore-wrapper/influencer-card/influencer-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfluencerDetailsComponent } from './explore-wrapper/influencer-details/influencer-details.component';
import { ExploreComponent } from './explore-wrapper/explore/explore.component';
import { RouterModule } from '@angular/router';
import { RegionChartComponent } from './explore-wrapper/influencer-details/region-chart/region-chart.component';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    ExploreWrapperComponent,
    InfluencerCardComponent,
    InfluencerDetailsComponent,
    ExploreComponent,
    RegionChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FontAwesomeModule,
    ChartModule,
    HighchartsChartModule
  ]
})
export class ExploreModule { }

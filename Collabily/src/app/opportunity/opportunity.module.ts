import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunitiesWrapperComponent } from './opportunities-wrapper/opportunities-wrapper.component';
import { OpportunitiesBrandManagerComponent } from './opportunities-wrapper/opportunities-brand-manager/opportunities-brand-manager.component';
import { OpportunitiesInfluencerComponent } from './opportunities-wrapper/opportunities-influencer/opportunities-influencer.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OpportunityCardComponent } from './opportunities-wrapper/components/opportunity-card/opportunity-card.component';
import { OpportunityResponseCardComponent } from './opportunities-wrapper/components/opportunity-response-card/opportunity-response-card.component';
import { OpportunityModalWrapperComponent } from './opportunities-wrapper/opportunity-modal-wrapper/opportunity-modal-wrapper.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PieChartComponent } from './opportunities-wrapper/components/pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StackedAreaChartComponent } from './opportunities-wrapper/components/stacked-area-chart/stacked-area-chart.component';
import { OpportunityDetailsComponent } from './opportunities-wrapper/components/opportunity-details/opportunity-details.component';
import { SharedModule } from '../shared/shared.module';
import { OpportunityModalComponent } from './opportunities-wrapper/opportunity-modal-wrapper/opportunity-modal/opportunity-modal.component';



@NgModule({
  declarations: [
    OpportunitiesWrapperComponent,
    OpportunitiesBrandManagerComponent,
    OpportunitiesInfluencerComponent,
    OpportunityCardComponent,
    OpportunityResponseCardComponent,
    OpportunityModalWrapperComponent,
    PieChartComponent,
    StackedAreaChartComponent,
    OpportunityDetailsComponent,
    OpportunityModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    FontAwesomeModule,
    NgxChartsModule
  ]
})
export class OpportunityModule { }

import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { SettingsComponent } from 'src/app/components/settings/settings.component';
import { ChatWrapperComponent } from 'src/app/chats/chat-wrapper/chat-wrapper.component';
import { ExploreWrapperComponent } from 'src/app/explore/explore-wrapper/explore-wrapper.component';
import { BillingsWrapperComponent } from 'src/app/billing/billings-wrapper/billings-wrapper.component';
import { OpportunitiesWrapperComponent } from 'src/app/opportunity/opportunities-wrapper/opportunities-wrapper.component';
import { ExploreComponent } from 'src/app/explore/explore-wrapper/explore/explore.component';
import { InfluencerDetailsComponent } from 'src/app/explore/explore-wrapper/influencer-details/influencer-details.component';
import { OpportunityModalWrapperComponent } from 'src/app/opportunity/opportunities-wrapper/opportunity-modal-wrapper/opportunity-modal-wrapper.component';
import { OpportunityDetailsComponent } from 'src/app/opportunity/opportunities-wrapper/components/opportunity-details/opportunity-details.component';
import { DashboardWrapperComponent } from 'src/app/dashboard/dashboard-wrapper/dashboard-wrapper.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardWrapperComponent },
  {
    path: 'explore',
    children: [
      { path: '', component: ExploreComponent },
      { path: ':id', component: InfluencerDetailsComponent },
    ],
  },
  {
    path: 'opportunities',
    children: [
      {
        path: '',
        component: OpportunitiesWrapperComponent,
        children: [
          {
            path: 'new',
            component: OpportunityModalWrapperComponent,
            outlet: 'modal',
          },
          {
            path: ':id',
            children: [
              {
                path: 'edit',
                component: OpportunityModalWrapperComponent,
                outlet: 'modal',
              },
              {
                path: 'details',
                component: OpportunityDetailsComponent,
                outlet: 'sidebar',
              },
            ],
          },
        ],
      },
    ],
  },
  { path: 'chats', component: ChatWrapperComponent },
  { path: 'billings', component: BillingsWrapperComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'settings', component: SettingsComponent, outlet: 'sidebar' },
];

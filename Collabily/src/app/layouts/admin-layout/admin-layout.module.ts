import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { MaterialModule } from 'src/app/material.module';
import { ExploreModule } from 'src/app/explore/explore.module';
import { ChatsModule } from 'src/app/chats/chats.module';
import { OpportunityModule } from 'src/app/opportunity/opportunity.module';
import { DashboardModule } from 'src/app/dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DashboardModule,
    ExploreModule,
    ChatsModule,
    OpportunityModule
  ],
  declarations: [
    UserProfileComponent
  ],
})
export class AdminLayoutModule {}

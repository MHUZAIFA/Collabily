import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { MaterialModule } from 'src/app/material.module';
import { ExploreModule } from 'src/app/explore/explore.module';
import { ChatsModule } from 'src/app/chats/chats.module';
import { OpportunityModule } from 'src/app/opportunity/opportunity.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ExploreModule,
    ChatsModule,
    OpportunityModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent
  ],
})
export class AdminLayoutModule {}

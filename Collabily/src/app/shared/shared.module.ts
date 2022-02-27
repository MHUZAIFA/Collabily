import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarWrapperComponent } from './sidebar-wrapper/sidebar-wrapper.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    SidebarWrapperComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarWrapperComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }

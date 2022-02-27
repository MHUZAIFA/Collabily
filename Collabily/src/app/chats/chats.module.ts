import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWrapperComponent } from './chat-wrapper/chat-wrapper.component';
import { MaterialModule } from '../material.module';
import { RecipientComponent } from './chat-wrapper/recipient/recipient.component';
import { ChatWindowComponent } from './chat-wrapper/chat-window/chat-window.component';
import { ConvUnitComponent } from './chat-wrapper/chat-window/conv-unit/conv-unit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChatWrapperComponent,
    RecipientComponent,
    ChatWindowComponent,
    ConvUnitComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ChatsModule { }

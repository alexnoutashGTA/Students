import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyMessagesRoutingModule } from './lazy-messages-routing-module';
import {Messages} from '../../messages/messages';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    Messages
  ],
  imports: [
    CommonModule,
    LazyMessagesRoutingModule,FormsModule,ReactiveFormsModule,
  ]
})
export class LazyMessagesModule { }

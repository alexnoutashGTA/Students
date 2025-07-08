import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyMessagesRoutingModule } from './lazy-messages-routing-module';
import {Messages} from '../../messages/messages';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Footer} from '../../footer/footer';
import {LazyFooter} from '../../lazy-footer/lazy-footer';


@NgModule({
  declarations: [
    Messages, LazyFooter

  ],
  imports: [
    CommonModule,
    LazyMessagesRoutingModule,FormsModule,ReactiveFormsModule,
  ]
})
export class LazyMessagesModule { }

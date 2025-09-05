import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyDetailRoutingModule } from './lazy-detail-routing-module';
import {Detail} from '../../detail/detail';
import {LazyMessagesModule} from "../lazy-messages/lazy-messages-module";



@NgModule({
  declarations: [
   Detail
  ],
    imports: [
        CommonModule,
        LazyDetailRoutingModule,
        LazyMessagesModule
    ]
})
export class LazyDetailModule { }

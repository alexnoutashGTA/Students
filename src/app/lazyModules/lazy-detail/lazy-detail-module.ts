import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyDetailRoutingModule } from './lazy-detail-routing-module';
import {Detail} from '../../detail/detail';
import {LazyMessagesModule} from "../lazy-messages/lazy-messages-module";
import {FormsModule} from "@angular/forms";
import {ChildDetail} from '../../child-detail/child-detail';



@NgModule({
  declarations: [
   Detail,
    ChildDetail

  ],
    imports: [
        CommonModule,
        LazyDetailRoutingModule,
        LazyMessagesModule,
        FormsModule
    ]
})
export class LazyDetailModule { }

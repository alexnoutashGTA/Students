import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyDetailRoutingModule } from './lazy-detail-routing-module';
import {Detail} from '../../detail/detail';



@NgModule({
  declarations: [
   Detail
  ],
  imports: [
    CommonModule,
    LazyDetailRoutingModule
  ]
})
export class LazyDetailModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyFaqRoutingModule } from './lazy-faq-routing-module';
import {Faq} from '../../faq/faq';


@NgModule({
  declarations: [
    Faq
  ],
  imports: [
    CommonModule,
    LazyFaqRoutingModule
  ]
})
export class LazyFaqModule { }

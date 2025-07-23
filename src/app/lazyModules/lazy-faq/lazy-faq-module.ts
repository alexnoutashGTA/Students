import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyFaqRoutingModule } from './lazy-faq-routing-module';
import {Faq} from '../../faq/faq';
import {ContentService} from '../../services/content-service';


@NgModule({
  declarations: [
    Faq
  ],
  imports: [
    CommonModule,
    LazyFaqRoutingModule
  ],
  providers: [
    ContentService
  ]
})
export class LazyFaqModule { }

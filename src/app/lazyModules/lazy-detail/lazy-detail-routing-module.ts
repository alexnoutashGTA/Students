import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Detail} from '../../detail/detail';


const routes: Routes = [{ path: '', component: Detail }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyDetailRoutingModule { }

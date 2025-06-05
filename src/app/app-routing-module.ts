import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyRoutes} from './routes';

const routes= MyRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

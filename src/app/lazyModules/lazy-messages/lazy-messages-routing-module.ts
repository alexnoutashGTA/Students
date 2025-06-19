import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Messages} from '../../messages/messages';

const routes: Routes = [{ path: '', component: Messages }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyMessagesRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShorterLinkComponent } from './shorter-link/shorter-link.component';

const routes: Routes = [
  {
    path : '',
    component: ShorterLinkComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShorterLinkRoutingModule { }

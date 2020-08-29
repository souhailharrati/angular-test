import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {
    path : '',
    component: FeaturesComponent,
    children : [
      {
        path: 'search',
        loadChildren: () => import('./search-user/search-user.module').then(m => m.SearchUserModule)
      },
      {
        path: 'short',
        loadChildren: () => import('./shorter-link/shorter-link.module').then(m => m.ShorterLinkModule)

      },
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      }
    ]
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }

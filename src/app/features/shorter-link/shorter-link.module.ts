import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShorterLinkComponent } from './shorter-link/shorter-link.component';
import {ShorterLinkRoutingModule} from './shorter-link-routing.module'


@NgModule({
  declarations: [ShorterLinkComponent],
  imports: [
    CommonModule,
    ShorterLinkRoutingModule
  ]
})
export class ShorterLinkModule { }

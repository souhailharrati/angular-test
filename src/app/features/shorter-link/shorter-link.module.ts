import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShorterLinkComponent } from './shorter-link/shorter-link.component';
import {ShorterLinkRoutingModule} from './shorter-link-routing.module'
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [ShorterLinkComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ShorterLinkRoutingModule
  ]
})
export class ShorterLinkModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShorterLinkPipe } from './pipes/shorter-link.pipe';



@NgModule({
  declarations: [ShorterLinkPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

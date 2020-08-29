import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShorterLinkPipe } from './pipes/shorter-link.pipe';


@NgModule({
  declarations: [ShorterLinkPipe],
  imports: [
    CommonModule
  ],
  providers:    [ ShorterLinkPipe ]

})
export class SharedModule { }

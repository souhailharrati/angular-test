import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUserComponent } from './search-user/search-user.component';
import { SearchUserRoutingModule } from './search-user-routing.module';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [SearchUserComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SearchUserRoutingModule
  ]
})
export class SearchUserModule { }

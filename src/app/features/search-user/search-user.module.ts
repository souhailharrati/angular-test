import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUserComponent } from './search-user/search-user.component';
import { SearchUserRoutingModule } from './search-user-routing.module';



@NgModule({
  declarations: [SearchUserComponent],
  imports: [
    CommonModule,
    SearchUserRoutingModule
  ]
})
export class SearchUserModule { }

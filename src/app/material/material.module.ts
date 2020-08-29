import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatCardModule
  ],
  exports: [
    MatFormFieldModule,
    MatCardModule
  ]
})
export class MaterialModule { }

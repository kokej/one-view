import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpComponent } from './up.component';
import { UpRouting } from './up-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UpRouting
  ],
  declarations: [UpComponent]
})
export class UpModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftComponent } from './left.component';
import { LeftRouting } from './left-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LeftRouting
  ],
  declarations: [LeftComponent]
})
export class LeftModule { }

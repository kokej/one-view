import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightComponent } from './right.component';
import { RightRouting } from './right-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RightRouting
  ],
  declarations: [RightComponent]
})
export class RightModule { }

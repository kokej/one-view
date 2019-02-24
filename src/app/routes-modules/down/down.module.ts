import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownComponent } from './down.component';
import { DownRouting } from './down-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DownRouting
  ],
  declarations: [DownComponent]
})
export class DownModule { }

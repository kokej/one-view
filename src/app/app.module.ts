import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRouting } from './app-routing.module';
import { NotFoundComponent } from './not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes-modules/home/home.component';

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, AppRouting ],
  declarations: [ AppComponent, NotFoundComponent, HomeComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

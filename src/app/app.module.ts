import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RandomerModule } from 'randomer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RandomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';

import { JsonRestyleModule } from '../../lib/json-restyle/src/json-restyle.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JsonRestyleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

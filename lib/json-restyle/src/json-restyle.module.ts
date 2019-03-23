import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { JsonRestyleComponent } from './json-restyle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JsonRestyleComponent],
  exports: [JsonRestyleComponent]
})
export class JsonRestyleModule { }

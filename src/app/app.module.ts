import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DecodePipe } from './pipes/decode.pipe';
import { EncodePipe } from './pipes/encode.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DecodePipe,
    EncodePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BodyIzqComponent } from './components/body-izq/body-izq.component';
import { BodyMedioComponent } from './components/body-medio/body-medio.component';
import { BodyTopComponent } from './components/body-top/body-top.component';
import { BodyInferiorComponent } from './components/body-inferior/body-inferior.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyIzqComponent,
    BodyMedioComponent,
    BodyTopComponent,
    BodyInferiorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from "@angular/router";

import { AppComponent } from './app.component';
import { DeyepCoreModule } from './../deyep.core/deyep.core.module';
import { PagesModule } from './../pages/pages.module';

@NgModule({
   imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    DeyepCoreModule.forRoot(),
    PagesModule
  ],
  declarations: [
    AppComponent
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  